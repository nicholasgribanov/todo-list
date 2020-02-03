import {Component, OnInit} from '@angular/core';

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

  todos = [
    new Todo(1,"Learn Angular", new Date(), false),
    new Todo(2,"Visit Mexico", new Date(), false),
    new Todo(3,"Drink tea", new Date(), false),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
