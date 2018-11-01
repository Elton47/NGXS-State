import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { SaladComponent } from './salad.component';

const routes: Routes = [
  {
    path: '',
    component: SaladComponent,
    children: [
      {
        path: 'order',
        component: SaladPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaladRoutingModule { }
