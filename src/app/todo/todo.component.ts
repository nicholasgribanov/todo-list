import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {TodoDataServiceService} from "../service/data/todo-data-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Todo} from "../list-todo/list-todo.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoService: TodoDataServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  id: number;
  todo: Todo;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, "", new Date(), false);

    if (this.id != -1)
      this.todoService.fetchTodo('Igor', this.id).subscribe(
        data => this.todo = data)

  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.insertTodo("Igor", this.todo).subscribe(
        data => {
          this.router.navigate(["todos"]);
        }
      )
    } else {
      this.todoService.updateTodo("Igor", this.todo.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["todos"]);
        }
      )
    }
  }
}
