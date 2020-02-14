import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../list-todo/list-todo.component";
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TodoDataServiceService {

  constructor(
    private http: HttpClient
  ) {

  }

  getTodosForUser(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  fetchTodo(username: string, id: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  insertTodo(username: string, todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos`, todo);
  }
}
