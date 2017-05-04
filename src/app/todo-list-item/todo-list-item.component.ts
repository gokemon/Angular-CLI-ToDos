import { Component, Input, Output, EventEmitter } from '@angular/core';
// imports Angular "core" library modules above and my stuff below
import { Todo } from '../todo';


// TypeDecorator 
@Component({
  // meta-properties
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})

// export class
export class TodoListItemComponent {
  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }


  /* method functions below */
  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }
} // TodoListItemComponent class