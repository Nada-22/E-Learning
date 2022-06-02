import { Course } from './../../../models/course';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CoursesService } from 'src/app/services/courses.service';
import { SafeScript, SafeUrl, SafeValue } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  categories:any=[]
  categoryname?: any = ""
  Courses:any
  file!: string;
  // abstract sanitize(context: SecurityContext, value: string | SafeValue): string | null
  // abstract bypassSecurityTrustUrl(value: string): SafeUrl

  constructor(private cat:CategoryService,private active:ActivatedRoute,private _course:CoursesService,private router:Router) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe(params => {
      this.categoryname = params.get('name');
     this.searshByName(this.categoryname)
    })
  
    // this.usercourse()
    this._course.serchbycoursename().subscribe((res) => { 
      console.log(res);
      // alert(res)
    }, (err) => {
      console.log(err);
      
     })
  }
  searshByName(Name:string){
    this.cat.searchbyCat(Name).subscribe((res)=>{
      this.Courses=res
      console.log(this.Courses)
      for(let i=0;i<this.Courses.length;i++){
       
       console.log(this.Courses[i].image);
//  let  objectURL = 'data:image/jpeg;base64,' +this.Courses[i].image= this.sanitize.bypassSecurityTrustUrl(objectURL)
      }   
    }, (err) => { 
      console.log(err)
    })
  }
  course = new Course();
  usercourse(courseId:any) { 
    this.course.CourseID = courseId;
    
    this._course.addusercourse(this.course.CourseID).subscribe((res)=>{
      console.log(res)
      // alert(this.course.CourseID)      
    }, (err) => { 
      console.log(err)
      // alert(this.course.CourseID)
    })
  }

  handelUpload(event:any){
    console.log(event)
    this.file=event.target.files
  }
}
