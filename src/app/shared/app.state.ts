import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetUsername } from './app.actions';

export interface AppStateModel {
  username: string;
  orderId: number;
  status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    username: '',
    orderId: Math.floor(Math.random() * 23000)
  }
})
export class AppState {
  @Selector()
  static getUsername(state: AppStateModel) {
    return state.username;
  }

  @Action(SetUsername)
  setUsername({ patchState }: StateContext<AppStateModel>, { payload }: SetUsername) {
    patchState({ username: payload });
  }
}