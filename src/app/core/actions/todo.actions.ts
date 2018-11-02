import { TodoRequest, Todo } from '../models/todo.model';

export class GetTodos {
  static readonly type = '[Todo] Get Todos';
  constructor() {}
}

export class AddTodo {
  static readonly type = '[Todo] Add Todo';
  constructor(public todoRequest: TodoRequest) {}
}

export class CompleteTodo {
  static readonly type = '[Todo] Complete Todo';
  constructor(public id: number) {}
}