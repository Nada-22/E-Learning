import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url:string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  });
  addusercourse(courseId: any) {
    alert(courseId)
    return this.http.post(this.url+"user/AddCourse",courseId ,{ headers: this.headers})
  }

}
