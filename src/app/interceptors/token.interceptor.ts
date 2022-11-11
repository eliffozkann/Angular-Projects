import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { LoginService } from '../services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private loginService: LoginService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = this.localStorageService.getData('token');
    if (this.loginService.isAuthenticated) {
      let newRequest = request.clone({
        // headers: request.headers.set("Authorization","Bearer " + token)
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      console.log(JSON.stringify(newRequest.headers));
      return next.handle(newRequest);
    } else {
      console.log('bu çalışmıyo');
    }

    return next.handle(request);
  }
}
