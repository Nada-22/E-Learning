import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  url:string='http://localhost:3000/';
  headers = new HttpHeaders({
    'Authorization': 'Bearer '+localStorage.getItem('token')
  });
  constructor(private _http:HttpClient) { }

  addReview(review:any,id:any){
    return this._http.post(this.url+`user/addReview/${id}`,review,{ 'headers': this.headers })
  }

  showCommints(id:any){
    return this._http.get(this.url+`user/getCourseReviews/${id}`,{'headers':this.headers})
  }
}