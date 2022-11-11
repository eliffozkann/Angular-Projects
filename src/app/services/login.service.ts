import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { TokenResponseModel } from '../models/tokenModel';
import { TokenUserModel } from '../models/tokenUserModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  tokenUserModel: TokenUserModel | null = null; //

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
    private jwtHelper: JwtHelperService
  ) {}

  private controllerUrl = `${environment.apiUrl}/auth`;

  login(userLogin: LoginModel): Observable<TokenResponseModel> {
    return this.httpClient.post<TokenResponseModel>(
      `${this.controllerUrl}/login`,
      userLogin
    );
  }

  logout() {
    this.localStorage.removeData('token');
  }

  // değişken olmasını istiyorsam get set koyarım
  get isAuthenticated(): boolean {
    let token = this.localStorage.getData('token');
    if (!token) return false;
    if (this.jwtHelper.isTokenExpired()) return false;
    return true;
  }
}
