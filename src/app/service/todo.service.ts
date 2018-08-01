import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private LocalStorage:LocalStorageService
  ) { }

  add(value) {
    // 1 > 2 ? console.log(true) : console.log(false)
    let tasks = JSON.parse(this.LocalStorage.retrieve('tasks')) === null ? [] :
     JSON.parse(this.LocalStorage.retrieve('tasks'));
     console.log(tasks);
    tasks.push(value);

    this.LocalStorage.store('tasks', JSON.stringify(tasks));
  }

  get() {
    return JSON.parse(this.LocalStorage.retrieve('tasks'));
  }

  remove(i) {
    let tasks: any[] = JSON.parse(this.LocalStorage.retrieve('tasks'));
    tasks.splice(i,1);

    this.LocalStorage.store('tasks', JSON.stringify(tasks));
  }


}
