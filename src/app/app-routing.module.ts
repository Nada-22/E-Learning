import { NotfoundModule } from './componants/notfound/notfound.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
{
  path: 'courses', 
  loadChildren: () => import('./componants/course/course.module').then(m => m.CourseModule)
  },

  {
    path: 'user', 
    loadChildren: () => import('./componants/user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    loadChildren: () => import('./componants/notfound/notfound.module').then(m => NotfoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
