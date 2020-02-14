import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../../app.constants";


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
    return this.http.get<HelloWorld>(`${API_URL}/hello`);
  }

  executeHelloWorldServiceWithName(name: string): Observable<HelloWorld> {
    return this.http.get<HelloWorld>(`${API_URL}/hello/${name}`);
  }
}
