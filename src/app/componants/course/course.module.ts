import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';


import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';

 import {MatTabsModule} from '@angular/material/tabs'; 

export const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'courseDetails', component: CourseDetailsComponent }

]
@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),MatTabsModule
  ]
})
export class CourseModule { }
