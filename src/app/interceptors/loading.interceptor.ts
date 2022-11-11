import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>, // o anda giden isteğin instance ını tutan alan
    next: HttpHandler //ilgili Http eventini handle eden class
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.startLoading();
    //request.headers() Authorization bearer token
    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(() => {
          this.loadingService.stopLoading();
        });
      })
    );
  }
}
