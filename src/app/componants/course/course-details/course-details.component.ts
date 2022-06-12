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
  comments :Comment[]=[];
  reviews:Comment[]=[];
  userName:any;
  commentUser:any=[]
  new:any=[]
  userComment=new Comment();
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
      this.comments=res;
for(let i=0;i<this.comments.length;i++){
  this.comments[i].UserID
  //this.commentUser.push(this.comments[i].comment)
  this.user.getUser(this.comments[i].UserID).subscribe((res:any)=>{
  //  console.log(res.name,res.avatar)
  
  this.userComment.UserName=(res.name)
  this.userComment.UserImage=(res.avatar)
  this.userComment.comment=(this.comments[i].comment)
    this.commentUser[i]=this.userComment

   this.new.push(this.commentUser[i])
   
   //console.log(this.commentUser[i])
   

  },(error:any)=>{
 
  })
  
}
console.log(this.new )
   
      
     // console.log(this.comments);
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
