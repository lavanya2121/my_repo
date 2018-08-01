import { TodoService } from './service/todo.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'TODOAPP';

  public tasks: any[] = this.todo.get() === null ? [] : this.todo.get();
  public newTask: string = '';

  constructor(private todo : TodoService)
  {}
  
  add(value) {
    this.todo.add(value);
    this.tasks.push(value);
    this.newTask = '';
  }

  remove(i) {
    this.todo.remove(i);
    this.tasks.splice(i, 1)
  }

}
