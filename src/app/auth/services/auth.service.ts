import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs';

import { IRegisterRequest } from '../interfaces/registerRequest.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  public register(registerReq: IRegisterRequest): void {
    this.http.post(environment.urls.apiAuthRegisterUrl, registerReq)
      .pipe(
        tap(console.log)
      )
      .subscribe()
  }
}
