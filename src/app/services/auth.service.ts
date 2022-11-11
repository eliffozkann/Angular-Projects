import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpclient: HttpClient) {}
  path = 'http://localhost:3000/users/auth';
  userToken: any;

  // login(loginUser: LoginUser) {
  //   let headers = new HttpHeaders();
  //   headers = headers.append('Content-Type', 'application/json');
  //   this.httpclient
  //     .post(this.path + 'login', loginUser, { headers: headers })
  //     .subscribe((data) => {
  //       this.saveToken(data['tokenString']);
  //       this.userToken=data['tokenString']
  //     });
  // }

  // saveToken(token: string) {
  //   localStorage.setItem('token', token);
  //}
}
