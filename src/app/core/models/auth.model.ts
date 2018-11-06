export class AuthModel {
  token?: string;
  username?: string;
}

export class LoginRequest {
  username: string;
  password: string;
}