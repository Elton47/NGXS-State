import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthModel, LoginRequest } from '../models/auth.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public login = (request: LoginRequest): Observable<AuthModel> => this.http.post<AuthModel>(`${environment.apiUrl}/login`, request);
  public logout = (token: string): Observable<void> => this.http.post<void>(`${environment.apiUrl}/logout`, token);
}