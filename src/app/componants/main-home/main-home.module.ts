import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {IvyCarouselModule} from 'angular-responsive-carousel';


export const routes: Routes = [
  { path: '', component: HomeComponent },

]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),IvyCarouselModule
  ]
})
export class MainHomeModule { }
