import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TodoService
  ]
})
export class CoreModule { }
