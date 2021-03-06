import { State, StateContext, Action, Selector } from '@ngxs/store';
import { Todo } from '../models/todo.model';
import { AddTodo, GetTodos, CompleteTodo, EditTodo, DeleteTodo } from '../actions/todo.actions';
import { TodoService } from '../services/todo.service';

@State<Todo[]>({
  name: 'todo',
  defaults: []
})
export class TodoState {
  constructor(private todoService: TodoService) {}

  @Selector()
  static todos(state: Todo[]): Todo[] {
    return state;
  }

  @Action(GetTodos)
  GetTodos({ setState }: StateContext<Todo[]>) {
    this.todoService
      .getTodos()
      .toPromise()
      .then((response: Todo[]) => setState(response))
      .catch(err => console.warn(err));
  }

  @Action(AddTodo)
  addTodo({ getState, setState }: StateContext<Todo[]>, action: AddTodo) {
    this.todoService
      .addTodo(action.todoRequest)
      .toPromise()
      .then((response: Todo) => setState([...getState(), response]))
      .catch(err => console.warn(err));
  }

  @Action(EditTodo)
  editTodo({ getState, setState }: StateContext<Todo[]>, action: EditTodo) {
    this.todoService
      .editTodo(action.id, action.todoRequest)
      .toPromise()
      .then((response: Todo) => setState(getState().map((todo: Todo) => todo.id === response.id ? response : todo )))
      .catch(err => console.warn(err));
  }

  @Action(CompleteTodo)
  completeTodo({ getState, setState }: StateContext<Todo[]>, action: CompleteTodo) {
    this.todoService
      .completeTodo(action.id)
      .toPromise()
      .then((response: Todo) => setState(getState().map((todo: Todo) => todo.id === response.id ? { ...todo, completed: true } : todo )))
      .catch(err => console.warn(err));
  }

  @Action(DeleteTodo)
  deleteTodo({ getState, setState }: StateContext<Todo[]>, action: DeleteTodo) {
    this.todoService
      .deleteTodo(action.id)
      .toPromise()
      .then(_ => setState(getState().filter((todo: Todo) => todo.id !== action.id)))
      .catch(err => console.warn(err));
  }
}