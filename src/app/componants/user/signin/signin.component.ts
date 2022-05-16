import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    /*global $, document, window, setTimeout, navigator, console, location*/


  }
  user = new User();
  loginUser = new User();

  signupuser(name: string, email: string, password: string) {
    
    this.user.name = name;
    this.user.mail = email;
    this.user.password = password;
    console.log(this.user)
    this.auth.Signup(this.user).subscribe(
      (res: any) => { 
        localStorage.setItem('token',res.tokens[0])

      console.log(res);

      }, (err: any) => { 
      console.log(err);

      }
    )
  }

   loginuser( email: string, password: string) {
    
    this.loginUser.mail = email;
    this.loginUser.password = password;
    this.auth.login(this.loginUser).subscribe(
      (res: any) => { 
        localStorage.setItem('token',res.tokens[0])

      console.log(res);

      }, (err: any) => { 
      console.log(err);

      }
    )
  }
}
