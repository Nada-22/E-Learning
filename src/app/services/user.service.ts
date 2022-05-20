import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }
  private url = 'http://localhost:3000/';
   headers = new HttpHeaders({
   
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  });
  getLoginUser() { 
    return this._httpClient.get(this.url + "user/profile", { headers: this.headers});
  }

}
