import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Task } from '../model/task';
import { TasksService } from './../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;

  displayedColumns = ['_id', 'description', 'completed'];

  constructor(private tasksService: TasksService, public dialog: MatDialog) {
    this.tasks$ = this.tasksService.findAll().pipe(
      catchError((error) => {
        this.onError("Error on load tasks.")
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {}
}
