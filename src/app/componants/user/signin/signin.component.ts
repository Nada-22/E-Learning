import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
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
  signupuser(name: string, email: string, password: string) {
    
    this.user.name = name;
    this.user.mail = email;
    this.user.password = password;
    this.auth.Signup(this.user).subscribe(
      (res: any) => { 
        Swal.fire(
          'Good job!',
          'registration successfull',
          'success'
        )
        localStorage.setItem('token',res.tokens[0])
      // console.log(res);

      }, (error: any) => { 
        console.log(error);
        console.log(error.error.errors.message);
        
      for (const err in error.error.errors) {
      //   for (let i = 0; i < error.error.errors.length; i++) {
        console.log(error.error.errors[err].message);
        Swal.fire(
          'Failed!',
          error.error.errors[err].message,
          'error'
        )
        }
      // }

      }
    )
  }
}
