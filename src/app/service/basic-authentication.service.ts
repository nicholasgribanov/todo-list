import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {API_URL} from "../app.constants";

export const TOKEN = 'token';

export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {


  constructor(
    private http: HttpClient
  ) {
  }


  executeBasicAuth(username: string, password: string): Observable<BasicAuthBean> {
    let auth = "Basic " + window.btoa(username + ":" + password);
    let headers = new HttpHeaders({
      Authorization: auth
    });
    return this.http.get<BasicAuthBean>(`${API_URL}/basicauth`, {headers})
      .pipe(
        map(
          data => {

            sessionStorage.setItem(AUTHENTICATED_USER, username);

            sessionStorage.setItem(TOKEN, auth);
            return data;
          }
        )
      );
  }

  executeJWTAuth(username: string, password: string): Observable<any> {

    return this.http.post<any>(`${API_URL}/authenticate`, {
      username,
      password
    })
      .pipe(
        map(
          data => {

            sessionStorage.setItem(AUTHENTICATED_USER, username);

            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }

  getAuthenticatedToken(): string {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }

  getAuthenticatedUser(): string {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  isUserLoggedIn(): boolean {
    return sessionStorage.getItem(AUTHENTICATED_USER) !== null;
  }


  logout(): void {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class BasicAuthBean {
  constructor(
    public message: string
  ) {
  }
}
