import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { RouterState } from './states/router.state';
import { TodoState } from './states/todo.state';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      RouterState,
      TodoState
    ])
  ],
  providers: [
    TodoService
  ]
})
export class CoreModule { }
