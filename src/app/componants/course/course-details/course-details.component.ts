import { Comments } from './../../../models/comments';
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
  reviews=new Comment();
  userName:any;
  commentUser: any[] = [];
  new:any=[]
  userComment=new Comment();
  course = new Course();
  newArry: Comments[]=[];
  rate!:number
  isEnrolled = false;
  courses: Course[] = [];
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
    this.getUserCourses();
  }
  commintShow(){
    this.review.showCommints(this.courseId).subscribe((res:any)=>{
      this.comments = res;
      console.log(this.comments);
      
      for (let i = 0; i < this.comments.length; i++) { 
        let id = this.comments[i].UserID;
        this.user.getUser(id).subscribe((res: any) => {   
        let  newobj:Comments = {
          UserName: res.name,
          comment: this.comments[i].comment,
          UserImage: res.avatar,
          createdAt: this.comments[i].createdAt
          }
          // console.log(newobj);
          this.newArry.push(newobj);
          // console.log(this.newArry);
         console.log(res)
        }
        ,(err:any)=>{
          console.log(err)
        }
        )
        
      }
      
 
      console.log(this.newArry);
      
      
    }, (err: any) =>
      {
        console.log(err);
       })

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

  onRate(newRate:any){
    this.rate=newRate;
    // alert(this.rate)

    this.review.addRate(this.rate,this.courseId).subscribe((res:any)=>{
      console.log(res);
      this.courseDetails(this.courseId);
    },(err:any)=>{
      console.log(err.error.text)
      if (err.error.text) { 
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: err.error.text,
         
        })
      }
    }
    )
    
    
  }

  enrollCourse(courseId:any) {     
    this._course.addusercourse(courseId).subscribe((res:any)=>{
      console.log(res)
      this.router.navigateByUrl(`/courses/courseContent/${courseId}`)
    }, (err:any) => { 
      console.log(err.error.text)
      if (err.error.text) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'You already Enrolled in this course',
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
  getUserCourses() {
    this._course.getUserCourses().subscribe(
      (res: any) => {
        this.courses = res;
        for (let i = 0; i < this.courses.length; i++) {
          if (this.courses[i]._id == this.courseId) {
            this.isEnrolled = true;
          }
        }
        console.log(this.courses)
      }, (err: any) => { 
        console.log(err)
      }
    )
  
  }
}
