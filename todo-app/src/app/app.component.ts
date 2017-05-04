import { Component } from '@angular/core';
// imports Angular "core" library modules above and my stuff below
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

  // newTodo: Todo = new Todo();
  /* Ask Angular DI system to inject the dependency         */
  /* associated with the dependency injection token `TodoDataService`*/
  /* and assign it to a property called `todoDataService`   */
  constructor(private todoDataService: TodoDataService) {
  }

  /* method functions below */
  // No longer needed, now handled by TodoListHeaderComponent
  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  /* Method to handle event emitted by TodoListHeaderComponent */
  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
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
