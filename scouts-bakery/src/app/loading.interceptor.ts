import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingServiceTsService } from './services/loading.service.ts.service';
var pendingRequests = 0;
@Injectable()
export class loadingInterceptor implements HttpInterceptor {

  constructor(private loadingServiceTsService: LoadingServiceTsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingServiceTsService.showLoading();
    pendingRequests = pendingRequests + 1;

    return next.handle(request).pipe(
      tap({
        next:(event) => {
          if(event.type === HttpEventType.Response) {
            this.handleHideLoading();
          }
        },
        error: (_) => {
          this.handleHideLoading();
        }
      })
    );
  }

  handleHideLoading() {
    pendingRequests = pendingRequests - 1;
    if (pendingRequests === 0)
    this.loadingServiceTsService.hideLoading();
  }
};
