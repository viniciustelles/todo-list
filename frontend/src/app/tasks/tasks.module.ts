import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class TasksModule { }
