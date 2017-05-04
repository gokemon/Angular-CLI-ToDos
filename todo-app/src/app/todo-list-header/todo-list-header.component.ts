import { Component, Output, EventEmitter } from '@angular/core';
// imports Angular "core" library modules above and my stuff below
import { Todo } from '../todo';


// TypeDecorator 
@Component({
  // properties
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})

// export class
export class TodoListHeaderComponent {
  title = 'My ToDo App-CR';
  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  // method functions below
  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }
}// TodoListHeaderComponent class