import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
  courseId!: string;
  constructor(private _active:ActivatedRoute) { }

  ngOnInit(): void {
    this._active.paramMap.subscribe(params =>{
      this.courseId = params.get('id') as string;
    })
  }

}
