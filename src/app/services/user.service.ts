import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }
  private url = 'http://localhost:3000/';
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgyOTliMzA0MGNjZDdlNGRiYWE4NGUiLCJpYXQiOjE2NTI3MjYxOTV9.9CsAduFohFr3inr_clkg-1OnL52bQ4WPoHrFKCU16sA',
  });
  getLoginUser(id: any) { 
    return this._httpClient.get(this.url + `user/${id}`, {headers: this.headers});
  }

}
