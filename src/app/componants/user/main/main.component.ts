import { CoursesService } from './../../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  page: number = 1;
  // count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [3, 6, 9, 12];
  p: any = 1;
  count: any = 2;
  course=new Course();
  constructor(private _course: CoursesService) { }
courses!:Course[]
  ngOnInit(): void {
    this.getUserCourses();
    // this.deleteCourse("629e06e516f34840e26ca11e");
  }
  getUserCourses() {
    this._course.getUserCourses().subscribe(
      (res: any) => {
        this.courses = res;
        console.log(this.courses)
      }, (err: any) => { 
        console.log(err)
      }
    )
  
  }
  deleteCourse(id: any) { 
    // alert(id)
    
    this._course.deleteCourse(id).subscribe(
      (res: any) => {
        console.log(res)
        // this.getUserCourses();
      }, (err: any) => { 
        console.log(err)
      }
    )
  }
}
