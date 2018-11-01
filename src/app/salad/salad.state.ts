import { State, Selector } from '@ngxs/store';

export interface SaladStateModel {
  dressing: string;
  price: number;
  toppings: string[];
}

@State<SaladStateModel>({
  name: 'salad',
  defaults: {
    dressing: 'ranch',
    price: 9.99,
    toppings: []
  }
})
export class SaladState {
  @Selector()
  static getDressing(state: SaladStateModel) {
    return state.dressing.toLocaleUpperCase();
  }
  @Selector()
  static getSalad(state: SaladStateModel) {
    return state;
  }
}