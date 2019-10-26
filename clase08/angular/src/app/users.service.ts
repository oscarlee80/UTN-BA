import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  login (data) {
    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    // let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   
    return this.http.post("http://localhost:3000/authentication/login", {
      email: data.email,
      password: data.password
    }, {headers: headersClient});
  } 
    
}

