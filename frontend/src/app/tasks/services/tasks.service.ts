import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly API = '/assets/tasks.json';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Task[]>(this.API).pipe(first(), delay(5000));
  }
}
