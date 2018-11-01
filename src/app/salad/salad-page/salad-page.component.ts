import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SaladState } from '../salad.state';
import { AppState } from '../../shared/app.state';

@Component({
  selector: 'app-salad-page',
  templateUrl: './salad-page.component.html',
  styleUrls: ['./salad-page.component.scss']
})
export class SaladPageComponent implements OnInit {
  @Select(AppState.getUsername) username$;
  @Select(SaladState.getSalad) salad$;

  ngOnInit() {
  }

}
