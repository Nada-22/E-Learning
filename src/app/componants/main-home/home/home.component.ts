import { CoursesService } from 'src/app/services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  } from 'ngx-owl-carousel-o';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userId:any;
categories:any=[]
  constructor(private _user:UserService,private cat:CategoryService,private router:Router,private _courses:CoursesService) { }
  getCat(){
    this.cat.getAllCat().subscribe((res)=>{
      this.categories=res
      console.log(this.categories)
    },(error)=>{
      console.log(error)
    })
  }
  searshByName(Name:string){
  this.cat.searchbyCat(Name).subscribe((res)=>{
    this.router.navigateByUrl("/courses/{{name}}")
     
  })
  }
  ngOnInit(): void {
    // console.log(this.userId)
    this.getCat();
    this.getTop3Courses();
  }

  getTop3Courses() {
    this._courses.getTopCourses().subscribe((res: any) => {
      console.log(res)
    
     }
      , (error:any) => { 

        console.log(error);
        
      })
}

}
