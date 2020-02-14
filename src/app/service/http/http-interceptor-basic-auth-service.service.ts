import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthServiceService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = 'Igor';
    let password = 'Niva';
    let auth = "Basic " + window.btoa(username + ":" + password);
    req = req.clone({
      setHeaders: {
        Authorization: auth
      }
    });

    return next.handle(req);
  }


}
