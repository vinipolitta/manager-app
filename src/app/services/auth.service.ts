import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { ILogin, ILoginResponse } from 'src/models/auth.model';
import { map } from 'rxjs';
import { apiEndpoints } from '../constants/apiEndpoints';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }

  public onLogin(data: ILogin) {
    return this.http.post<ILoginResponse>(apiEndpoints.AuthEndpoint.login, data)
      .pipe(
        map((resp) => {
          if (resp) {
            this.tokenService.setToken(resp.token);
          }
          return resp;
        })
      );
  }

  public onLogout() {
    this.tokenService.removeToken();
  }
}
