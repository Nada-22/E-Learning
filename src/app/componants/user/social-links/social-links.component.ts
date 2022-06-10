import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Validators,FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  constructor(private _user:UserService,private FB:FormBuilder) { }
  user = new User();
  social:any = [];
  socialLinks = new FormGroup({});
  ngOnInit(): void {
    this.socialLinks = this.FB.group({
      Twitter:[],
      Facebook: [],
      Google: [],
      LinkedIn: [],
      GitHub: [],
  

    })

  }
  addSocialLinks(data:any) {
   
    
    this._user.updateUser(data).subscribe(
      (res: any) => {
        // this.user.socialLinks = res.socialLinks;
        console.log(res)
        // console.log(this.user.socialLinks);
        
      }, (err: any) => { 
        console.log(err)
      }
    )
  
}
}
