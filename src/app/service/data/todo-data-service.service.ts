import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../list-todo/list-todo.component";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoDataServiceService {

  constructor(
    private http: HttpClient
  ) {

  }

  getTodosForUser(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`);
  }
}
