import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { SecureStorageService } from './secure-storage.service';
import { EAuthTokens } from '../enums/authTokens.enum';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private accessToken!: string;

  constructor(private secureStorageService: SecureStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.secureStorageService.get(EAuthTokens.ACCESS_TOKEN)
      .subscribe((token: { value: string }) => this.accessToken = token.value);

    if (this.accessToken) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });

      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
