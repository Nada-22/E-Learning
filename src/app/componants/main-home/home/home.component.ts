import { Component, OnInit } from '@angular/core';
import {  } from 'ngx-owl-carousel-o';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userId:any;

  constructor(private _user:UserService) { }
  
  ngOnInit(): void {
    this.userId=localStorage.getItem('id');
    // console.log(this.userId)
    this.getuser();
  }
  getuser() {
    
    this._user.getLoginUser(this.userId).subscribe(
      (res: any) => { 
         console.log(res);
      },
      (err: any) => { 
        console.log(err);

      }
);}


}
