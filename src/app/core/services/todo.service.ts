import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'first todo',
      description: 'blah',
      status: 'OPEN',
    },
  ];

  constructor() {}

  getAllTodo() {
    return this.todos;
  }
}
