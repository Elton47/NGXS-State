import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AuthModel } from '../models/auth.model';
import { AuthService } from '../services/auth.service';
import { Login, Logout } from '../actions/login.actions';
import { tap } from 'rxjs/operators';

@State<AuthModel>({
  name: 'auth'
})
export class AuthState {
  @Selector()
  static token(state: AuthModel) {
    return state.token;
  }

  constructor(private authService: AuthService) {}

  @Action(Login)
  login({ patchState }: StateContext<AuthModel>, action: Login) {
    return this.authService.login(action.request).pipe(
      tap((response: { token: string }) => patchState({ ...response, username: action.request.username }))
    );
  }

  @Action(Logout)
  Logout({ getState, setState }: StateContext<AuthModel>) {
    const { token } = getState();
    return this.authService.logout(token).pipe(tap(_ => setState({})));
  }
}