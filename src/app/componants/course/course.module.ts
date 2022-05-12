import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';


import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';

 import {MatTabsModule} from '@angular/material/tabs';
import { CourseContentComponent } from './course-content/course-content.component'; 

export const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'courseDetails', component: CourseDetailsComponent },
  { path: 'courseContent', component: CourseContentComponent }

]
@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CourseContentComponent,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),MatTabsModule
  ]
})
export class CourseModule { }
