import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// imports Angular "core" above and my stuff below
import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';


// TypeDecorator
@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent
  ], // declaring my app.component
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ], // importing Modules from Angular "core"
  // moved TodoDataService provider here from app.component per Angular specs
  providers: [TodoDataService], 
  bootstrap: [AppComponent]
})


// export class
export class AppModule { 
  // no code yet

}
