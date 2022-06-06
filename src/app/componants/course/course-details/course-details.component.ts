import { CoursesService } from 'src/app/services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { ReviewService } from 'src/app/services/review.service';
import { Comment } from 'src/app/models/comment';
import { UserService } from 'src/app/services/user.service';
import { Course } from 'src/app/models/course';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseComments = new Comment();
  courseId:any;
  formReview=new FormGroup({});
  comments:any[]=[];
  reviews:Comment[]=[];
  userName:any;
  course= new Course();
  constructor(private user: UserService, private active: ActivatedRoute,
    private review: ReviewService, private _formBuilder: FormBuilder, private _course: CoursesService,
  private router:Router) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe(params =>{
      this.courseId = params.get('cId');
      this.courseDetails(this.courseId);
      // this.enrollCourse(this.courseId);
    }
    )
    this.formReview=this._formBuilder.group({
      comment:['',[Validators.required]],
    });
    this.commintShow(); 
  }
  commintShow(){
    this.review.showCommints(this.courseId).subscribe((res:any)=>{
      // this.comments=res;
      console.log(res);
     
      for (let i  in res) {
        this.courseComments.comment = res[i].comment;
        this.courseComments.UserID = res[i].UserID;
        // console.log(res[i].UserID);
        // this.user.getUser(res[i].UserID).subscribe(
        //   (res: any) =>
        //   {
        //     console.log(res);
        //     this.courseComments.userName = res.name;
        //     this.courseComments.mail = res.mail;
        //     // this.comments.push(this.courseComments);
        //     console.log(this.courseComments);
            
        //   }
        //   , (error: any) => {console.log(error); }
        //   )
        console.log(this.courseComments);
        this.comments.push(this.courseComments);
        // this.comments.push(this.courseComments.comment);


      }
      
      console.log(this.comments);
    },
      (err: any) =>
      {
        console.log(err);
      
       }
    )

  }
  addCommint(){

    this.review.addReview(this.formReview.value,this.courseId).subscribe((res:any)=>{
      console.log(res)
    },(error:any)=>{
      console.log(error)
    }
    )

  }
  courseDetails(courseid:string) {
    this._course.CourseDetails(courseid).subscribe(
      (res: any) => {
        this.course = res;
        console.log(this.course);
       }
      , (error: any) => {
        console.log(error);
       })
  }
  enrollCourse(courseId:any) {     
    this._course.addusercourse(courseId).subscribe((res:any)=>{
      console.log(res)
      this.router.navigateByUrl(`/courses/courseContent/${courseId}`)
    }, (err:any) => { 
      console.log(err.error.text)
      if (err.error.text == "COURSE ALREADY EXISTS !!") {
        //swall
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'You already added this course',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Go to the Course',
         }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl(`/courses/courseContent/${courseId}`)
         }
        })
      }
    })
  }
}
