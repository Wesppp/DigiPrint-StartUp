import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs';

import { IRegisterRequest } from '../interfaces/registerRequest.interface';
import { environment } from '../../../environments/environment';
import { SecureStorageService } from '../../shared/services/secure-storage.service';
import { EAuthTokens } from '../../shared/enums/authTokens.enum';
import { IJwtAccessToken } from '../../shared/interfaces/jwtAccessToken.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient,
              private secureStorageService: SecureStorageService) { }

  public register(registerReq: IRegisterRequest): void {
    this.http.post<IJwtAccessToken>(environment.urls.apiAuthRegisterUrl, registerReq)
      .pipe(
        tap(({ accessToken}) => {
          console.log(accessToken);
          this.secureStorageService.set(EAuthTokens.ACCESS_TOKEN, accessToken);
        })
      )
      .subscribe();
  }
}
