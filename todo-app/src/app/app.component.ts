import { Component } from '@angular/core';
// imports Angular "core" above and my stuff below
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';
// Import class so we can register it as dependency injection toke

// TypeDecorator 
@Component({
  // properties
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

// export class
export class AppComponent {
  title = 'My ToDo App';
  myStatement1 = 'Things to do';
  myStatement2 = 'English bundle';
  fmPlaceHolder = 'Whats on your list?';

  newTodo: Todo = new Todo();
  /* Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService` */
  constructor(private todoDataService: TodoDataService) {
  }

  // method functions below
  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

    // Service is now available as this.todoDataService
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
