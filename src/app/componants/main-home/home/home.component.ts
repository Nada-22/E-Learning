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
    // console.log(this.userId)
  }



}
