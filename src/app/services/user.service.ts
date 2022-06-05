import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userCourse=false
  constructor(private _httpClient: HttpClient) { }
  private url = 'http://localhost:3000/';
   headers = new HttpHeaders({
   
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  });
  getLoginUser() { 
    return this._httpClient.get(this.url + "user/profile");
  }
  getUser(id:any) { 
    return this._httpClient.get(this.url + `user/${id}`);
  }
  getUserCourse(courseid: string) {
    this._httpClient.get(this.url + "user/profile").subscribe(
      (res: any) =>
      {
     
        for (let i in res.Courses) {       
      if (res.Courses[i].courserObj === courseid) {
        alert(res.Courses[i].courserObj)
        alert("aaa")
        this.userCourse = true;
      } else {
        console.log(res.Courses[i].courserObj);
        alert(res.Courses[i].courserObj)
        alert("bbb")
        this.userCourse=false;
      }
    }
        // alert(res.Courses)
       }
    )  
    console.log(this.userCourse);  
}
}
