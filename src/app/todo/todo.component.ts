import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {TodoDataServiceService} from "../service/data/todo-data-service.service";
import {ActivatedRoute} from "@angular/router";
import {Todo} from "../list-todo/list-todo.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoService: TodoDataServiceService,
    private router: ActivatedRoute
  ) {
  }

  id: number;
  todo: Todo;

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.todo = new Todo(1,"", new Date(),false);
    this.todoService.fetchTodo('Igor', this.id).subscribe(
      data => this.todo = data)

  }

}
