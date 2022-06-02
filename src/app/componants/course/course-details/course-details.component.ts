import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId:any;
  formReview=new FormGroup({});
  constructor(private active:ActivatedRoute,private review:ReviewService,private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe(params =>{
      this.courseId=params.get('cId');
    }
    )
    this.formReview=this._formBuilder.group({
      comment:['',[Validators.required]],
    });

    // this.addCommint();
    // console.log(this.courseId);
    

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
