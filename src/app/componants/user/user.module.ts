import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';


import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
]
@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }
