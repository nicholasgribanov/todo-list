import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicAuthenticationService} from "../basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthServiceService implements HttpInterceptor {

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();
    if (auth && username) {
      req = req.clone({
        setHeaders: {
          Authorization: auth
        }
      });
    }

    return next.handle(req);
  }


}
