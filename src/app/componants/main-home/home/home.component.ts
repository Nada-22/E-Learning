import { Component, OnInit } from '@angular/core';
import {  } from 'ngx-owl-carousel-o';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this.getuser();
  }
  getuser() {
    
    this._user.getLoginUser('628299b3040ccd7e4dbaa84e').subscribe(
      (res: any) => { 
         console.log(res);
      },
      (err: any) => { 
        console.log(err);

      }
);}


}
