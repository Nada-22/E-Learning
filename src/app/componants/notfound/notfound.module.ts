import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notfound404Component } from './notfound404/notfound404.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo:'notfound', component: Notfound404Component }
];

@NgModule({
  declarations: [
    Notfound404Component
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class NotfoundModule { }
