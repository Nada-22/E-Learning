import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    userId:any;
    loguser=new User();

  constructor(private _auth:AuthService,private _user:UserService,private data:UserdataService) { }
  ngOnInit(): void {
      this.userId=localStorage.getItem('id');
       this.getuser();
    // this.usertoken();
  }
  subscription!: Subscription;

    getuser() {
    
    this._user.getLoginUser(this.userId).subscribe(
      (res: any) => { 
         console.log(res);
         this.loguser.name=res.name;
        this.loguser.mail = res.mail;
        this.subscription = this.data.currentdata.subscribe(userinfo => this.loguser = userinfo)

      },
      (err: any) => { 
        console.log(err);
      }
      );
    // return this.loguser;
    }

  
  usertoken() {
    return this._auth.getToken();
  }
}
