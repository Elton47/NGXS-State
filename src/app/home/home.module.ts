import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TodosComponent } from './todos/todos.component';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from '../core/states/todo.state';

@NgModule({
  declarations: [LayoutComponent, TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    NgxsModule.forFeature([
      TodoState
    ])
  ]
})
export class HomeModule { }
