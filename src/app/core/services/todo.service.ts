import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoRequest, Todo } from '../models/todo.model';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  public getTodos = (): Observable<Todo[]> => this.http.get<Todo[]>(`${environment.apiUrl}/todos`);
  public addTodo = (request: TodoRequest): Observable<Todo> => this.http.post<Todo>(`${environment.apiUrl}/todos`, request);
  public completeTodo = (id: number): Observable<Todo> => this.http.patch<Todo>(`${environment.apiUrl}/todos/${id}`, { completed: true });
}