import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { SetUsername } from './shared/app.actions';
import { Navigate } from './shared/router.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(state => state.app) app$;

  constructor(private store: Store) {
  }

  clickHandler(username) {
    this.store.dispatch([
      new SetUsername(username),
      new Navigate('salad/order')
    ]);
  }
}
