import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    userId:any;
    loguser=new User();

  constructor(private _auth:AuthService,private _user:UserService) { }
  ngOnInit(): void {
      this.userId=localStorage.getItem('id');
       this.getuser();
    // this.usertoken();
  }
    getuser() {
    
    this._user.getLoginUser(this.userId).subscribe(
      (res: any) => { 
         console.log(res);
         this.loguser.name=res.name;
         this.loguser.mail=res.mail;
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
