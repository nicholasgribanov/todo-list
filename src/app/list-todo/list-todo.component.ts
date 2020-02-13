import {Component, OnInit} from '@angular/core';
import {TodoDataServiceService} from "../service/data/todo-data-service.service";
import {Router} from "@angular/router";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {
  }
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(
    private todoService: TodoDataServiceService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.refreshTodoList();
  }

  private refreshTodoList() {
    this.todoService.getTodosForUser('Igor').subscribe(
      (response) => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo('Igor', id).subscribe(
      response => {
        this.message = `Todo id = ${id} was deleted successful!`;
        this.refreshTodoList();
      }
    )
  }

  updateTodo(id: number): void {
    this.router.navigate(['todo', id]);
    console.log(`update ${id}`)
  }

  addTodo() {
    this.router.navigate(['todo', -1]);
  }
}
