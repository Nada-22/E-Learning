import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';


import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: CoursesComponent }
]
@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class CourseModule { }
