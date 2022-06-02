import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { ReviewService } from 'src/app/services/review.service';
import { Comment } from 'src/app/models/comment';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  comment =new Comment()
  courseId:any;
  formReview=new FormGroup({});
  comments:any;
  reviews:Comment[]=[];
  userName:any;

  constructor(private user:UserService,private active:ActivatedRoute,private review:ReviewService,private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe(params =>{
      this.courseId=params.get('cId');
    }
    )
    this.formReview=this._formBuilder.group({
      comment:['',[Validators.required]],
    });
    this.commintShow();
    // this.addCommint();
    // console.log(this.courseId);
    
  }
  commintShow(){
    this.review.showCommints(this.courseId).subscribe((res)=>{
      console.log(res);
      this.comments=res;
      for(let i=0;i<=this.comments.length;i++){
        this.user.getUser(this.comments[i].UserID).subscribe((res)=>{
          console.log(res);
          this.userName=res
         this.comment.name=this.userName.name;
        //  console.log(this.comment.name)
        this.comment.content=this.comments[i].comment;
        this.reviews.push(this.comment);
        // console.log(this.comment)

        // console.log(this.reviews)
        
        })
        
      }
      // console.log(this.comments)
      console.log(this.comment)

    })

  }
  addCommint(){
    // console.log(this.formReview.value);
    // console.log(this.courseId)

    this.review.addReview(this.formReview.value,this.courseId).subscribe((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    }
    )

  }

}
