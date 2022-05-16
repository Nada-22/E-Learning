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
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxNWFmZGU3ZTM1MmRhOGIzZjRiNmQiLCJpYXQiOjE2NTI2NDQ5MjV9.GWi1uw5EsmGjOVfEM0SX3Re2xQAsblXyd9ilnPxdnyc',
  });
  getLoginUser(id: any) { 
    return this._httpClient.get(this.url + `user/${id}`, {headers: this.headers});
  }

}
