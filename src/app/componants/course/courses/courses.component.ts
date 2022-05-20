import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
categories:any=[]
categoryname?:any=""
  constructor(private cat:CategoryService,private active:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.active.paramMap.subscribe(params => {
      this.categoryname = params.get('name');
     this.searshByName(this.categoryname)
    }

    )}
  searshByName(Name:string){
    this.cat.searchbyCat(Name).subscribe((res)=>{
    console.log(res)
       
    })
    }
}
