import { AppConfigService } from '../../../../environments/app-config.service';
import { Subject, Observable } from 'rxjs';
import { HttpResponseBody } from '../../objects/HttpResponseBody';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../objects/UserLogin';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  // permissionsLoaded = false;
  permissionsLoaded = true;
  private logoutEvent = new Subject();
  private API_LOGIN_URL;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private appConfig: AppConfigService) {
    this.API_LOGIN_URL = appConfig.getConfig().API_LOGIN_URL;
  }

  login(user: UserLogin) {
    // const headers = new HttpHeaders({ 'Authorization': `Basic ${btoa(user.userName + ':' + user.password)}`, 'Content-Type': 'application/x-www-form-urlencoded' });
    const headers = new HttpHeaders({ 'Authorization': `Basic ${btoa('testjwtclientid2' + ':' + 'XY7kmzoNzl100')}`, 'Content-Type': 'application/x-www-form-urlencoded' });
    const oauth = `username=${user.userName}`//john.doe
      + `&grant_type=password`
      + `&password=${user.password}`;//123456
    return this.http.post(
      `${this.API_LOGIN_URL}/oauth/token`, oauth, { headers: headers, observe: 'response' }
    );
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (token == null) {
      return false;
    }
    console.log('Decode Token', this.jwtHelper.decodeToken(token));
    console.log('Token Expiry', this.jwtHelper.isTokenExpired(token));
    // Check whether the token is expired and return - true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  public isPermissionsLoaded(): boolean {
    return this.permissionsLoaded;
  }

  // getUser(): Observable<HttpResponseBody> {
  // return this.http.post<HttpResponseBody>(`${this.API_AA_URL}/user`, {});
  // }

  // changePassword(oldPassword: string, newPassword: string): Observable<HttpResponseBody> {
  // return this.http.post<HttpResponseBody>(`${this.API_AA_URL}/user/change/password/${oldPassword}/${newPassword}`, {});
  // }

  public logout() {
    localStorage.removeItem('access_token');
    // localStorage.removeItem('clinicId');
    // localStorage.removeItem('clinicCode');
    this.logoutEvent.next();
  }

  triggerLogout() {
    this.logoutEvent.next();
  }

  isLogout() {
    return this.logoutEvent.asObservable();
  }
}
