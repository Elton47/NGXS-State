import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladComponent } from './salad.component';
import { NgxsModule } from '@ngxs/store';
import { SaladState } from './salad.state';
import { SaladPageComponent } from './salad-page/salad-page.component';

@NgModule({
  declarations: [
    SaladComponent,
    SaladPageComponent
  ],
  imports: [
    CommonModule,
    SaladRoutingModule,
    NgxsModule.forFeature([SaladState])
  ]
})
export class SaladModule { }
