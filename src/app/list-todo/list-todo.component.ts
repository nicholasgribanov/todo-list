import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos = [
    {id: 1, description: "Learn Angular"},
    {id: 2, description: "Visit Mexico"},
    {id: 3, description: "Drink tea"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
