import { LoginRequest } from '../models/auth.model';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public request: LoginRequest) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}