import { Component, EventEmitter, Input, Output } from '@angular/core';
// imports Angular "core" library modules above and my stuff below
import { Todo } from '../todo';

// TypeDecorator 
@Component({
  // meta-properties
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

// export class
export class TodoListComponent {
  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  /* method functions below */
  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
} // TodoListComponent class