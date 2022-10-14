import { Component, OnInit } from '@angular/core';

import { Task } from '../model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [
    { _id: '1', description: 'First task added', completed: true }
  ];

  displayedColumns = ['_id', 'description', 'completed'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
