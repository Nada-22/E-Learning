import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';


import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralComponent } from './general/general.component';
import { ChangPassComponent } from './chang-pass/chang-pass.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  // { path: 'dashboard', component: DashboardComponent },
  {path:'dashboard', component: DashboardComponent,
    children: [
    {path:'general',component:GeneralComponent},
    {path:'changPassword',component:ChangPassComponent},
    {path:'details',component:DetailsComponent},


  ]
},
]
@NgModule({
  declarations: [
    SigninComponent,
    DashboardComponent,
    GeneralComponent,
    ChangPassComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }
