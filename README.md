# Angular-CLI-ToDos
Using Angular CLI to create a ToDos list using App Module, Components, Services &amp; Router


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
