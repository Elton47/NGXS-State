import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { TodoRequest, Todo } from '../../core/models/todo.model';
import { AddTodo, GetTodos, CompleteTodo } from '../../core/actions/todo.actions';
import { TodoState } from '../../core/states/todo.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Select(TodoState.todos) todos$: Observable<Todo[]>;
  todoRequest: TodoRequest = new TodoRequest();

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(
      new GetTodos()
    );
  }

  public add(): void {
    this.store.dispatch(new AddTodo(this.todoRequest));
  }

  public edit(todo: Todo): void {
  }

  public complete(id: number): void {
    this.store.dispatch(new CompleteTodo(id));
  }
}
