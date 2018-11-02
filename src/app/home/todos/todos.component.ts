import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { TodoRequest, Todo } from '../../core/models/todo.model';
import { AddTodo, GetTodos, CompleteTodo, EditTodo, DeleteTodo } from '../../core/actions/todo.actions';
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
  editRequest: { id?: number, request?: TodoRequest } = {};

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(
      new GetTodos()
    );
  }

  public add(): void {
    this.store.dispatch(new AddTodo(this.todoRequest));
  }

  public edit(id: number, request: Todo): void {
    this.editRequest = { id, request };
  }

  public saveEdit(): void {
    this.store.dispatch(new EditTodo(this.editRequest.id, this.editRequest.request));
    this.editRequest = {};
  }

  public complete(id: number): void {
    this.store.dispatch(new CompleteTodo(id));
    if (this.editRequest && this.editRequest.id === id) {
      this.editRequest.request.completed = true;
    }
  }

  public delete(id: number): void {
    if (confirm('Are you sure you want to delete this Todo?')) {
      this.store.dispatch(new DeleteTodo(id));
    }
  }
}
