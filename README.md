# Angular-CLI-ToDos
Using Angular CLI to create a ToDos list using App Module, Components, Services &amp; Router

This should be working; that you can deploy to gh-pages, and its suppose to run
[https://gokemon.github.io/Angular-CLI-ToDos/todo-app/](https://gokemon.github.io/Angular-CLI-ToDos/todo-app/)

# Application Architecture #
In the FirstBasicAppComponent branch, we created:

- Created our Todo application using the Angular CLI
- Created an AppComponent component to display the user interface
- Created a Todo class to represent individual todos
- Created a TodoDataService service to create, update and remove todos

In the ComponentRefactoring branch, we created:

- a TodoListComponent to display a list of todo’s
- a TodoListItemComponent to display a single todo
- a TodoListHeaderComponent to create a new todo
- a TodoListFooterComponent to show how many todo’s there are


In the process, we learned:

- the basics of Angular component architecture
- how to pass data into a component using property bindings
- how to listen for events emitted by a component using event listeners
- how splitting components into smaller reusable components makes our code easier to reuse and maintain
- how we can use smart and dumb to make our life a whole lot easier when we need to refactor our application’s business logic



## app.component.html ##
Here is a super-short primer on Angular’s template syntax in case you haven’t seen it yet:

- `[property]="expression"`: set property of an element to the value of expression
- `(event)="statement"`: execute statement when event occurred
- `[(property)]="expression`": create two-way binding with expression
- `[class.special]="expression"`: add special CSS class to element when the value of expression is truthy
- `[style.color]="expression"`: set color CSS property to the value of expression
- `[(ngModel)]="newTodo.title"`: adds a two-way binding between the input value and newTodo.title
- `(keyup.enter)="addTodo()"`: tells Angular to execute addTodo() when the enter key was pressed while typing in the input element
- `*ngIf="todos.length > 0"`: only show the section element and all its children when there is at least one todo
- `*ngFor="let todo of todos"`: loop over all todo’s and assign current todo to a variable called todo for each iteration
- `[class.completed]="todo.complete"`: apply CSS class completed to li element when todo.complete is truthy
- `(click)="toggleTodoComplete(todo)"`: execute toggleTodoComplete(todo) when the checkbox is clicked
- `[checked]="todo.complete"`: assign the value of todo.complete to the property checked of the element
- `(click)="removeTodo(todo)"`: execute removeTodo(todo) when the destroy button is clicked

If you’re not familiar with Angular’s template syntax, you should definitely read the [official template syntax documentation](https://angular.io/docs/ts/latest/guide/template-syntax.html).

## In Summary ##
By the end of this project I should understand:

- the basics of Angular component architecture
- how you can pass data into a component using property bindings
- how you can listen for events emitted by a component using event listeners
- why it is a good practice to split components into smaller reusable components
- the difference between smart and dumb components and why keeping components dumb is a good practice

Still looking to ***Master Routing!***
