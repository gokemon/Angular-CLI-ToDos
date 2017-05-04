import { Component, Input } from '@angular/core';
// imports Angular "core" library modules above and my stuff below
import { Todo } from '../todo';


// TypeDecorator
@Component({
  // meta-properties
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})

// export class
export class TodoListFooterComponent {
  @Input()
  todos: Todo[];

  constructor() {
  }
  /* method functions below */
  // no code stubbs yet

} //TodoListFooterComponent class
