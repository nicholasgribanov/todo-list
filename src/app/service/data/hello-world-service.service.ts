import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



export class HelloWorld {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})


export class HelloWorldServiceService {

  constructor(private http: HttpClient) {
  }

  executeHelloWorldService(): Observable<HelloWorld> {
    return this.http.get<HelloWorld>("http://localhost:8081/hello");
  }
}
