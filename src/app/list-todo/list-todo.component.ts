import {Component, OnInit} from '@angular/core';
import {TodoDataServiceService} from "../service/data/todo-data-service.service";

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

  constructor(
    private todoService: TodoDataServiceService
  ) {
  }

  ngOnInit() {
    this.todoService.getTodosForUser('Igor').subscribe(
      (response) => {
        this.todos = response;
      }
    )
  }

}
