import { Course } from './../../../models/course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
categories:any=[]
  categoryname?: any = ""
  Courses:any=[]
  constructor(private cat:CategoryService,private active:ActivatedRoute,private _course:CoursesService,private router:Router) { }
 
  ngOnInit(): void {
    this.active.paramMap.subscribe(params => {
      this.categoryname = params.get('name');
     this.searshByName(this.categoryname)
    }

    )}
  searshByName(Name:string){
    this.cat.searchbyCat(Name).subscribe((res)=>{
      this.Courses=res
      console.log(this.Courses)
       
    }, (err) => { 
      console.log(err)
    })
  }
  course = new Course();
  usercourse(courseId: any) { 
    this.course.CourseID = courseId;
    this._course.addusercourse(this.course.CourseID).subscribe((res)=>{
      console.log(res)
      alert("Course Added")      
    }, (err) => { 
      console.log(err)
      alert("Course Already Added")
    })
  }
}
