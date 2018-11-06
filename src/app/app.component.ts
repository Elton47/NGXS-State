import { Component, OnInit } from '@angular/core';
import { Actions, ofActionDispatched } from '@ngxs/store';
import { Router } from '@angular/router';
import { Logout } from './core/actions/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private actions: Actions, private router: Router) {}

  ngOnInit(): void {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      this.router.navigate(['/login']);
    })
  }
}
