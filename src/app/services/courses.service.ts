import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url:string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  headers = new HttpHeaders({
    'Authorization': 'Bearer '+localStorage.getItem('token')
  });
  addusercourse(id:any) {
    // alert(CourseID)
    return this.http.post(this.url + 'user/AddCourse', {CourseID: id})
    // return this.http.post(this.url+"user/AddCourse",courseId ,{ headers: this.headers})
  }
  serchbycoursename() { 
    return this.http.get(this.url + 'user/SearchByCourseName/css', { headers: this.headers})
  }
  getCoursePlaylist(id:any){
    return this.http.get(this.url+`user/SearchByCourseplaylist/${id}`)
  }

}
