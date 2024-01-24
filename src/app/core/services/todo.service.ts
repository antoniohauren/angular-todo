import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'OPEN',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam optio perferendis, quidem fugit ducimus sapiente ea totam nam accusantium nulla at, tenetur dolore maiores facilis iure. Natus, autem eligendi.',
      status: 'OPEN',
    },
    {
      id: 2,
      title: 'PROGRESS',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam optio perferendis, quidem fugit ducimus sapiente ea totam nam accusantium nulla at, tenetur dolore maiores facilis iure. Natus, autem eligendi.',
      status: 'PROGRESS',
    },
    {
      id: 3,
      title: 'TESTING',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam optio perferendis, quidem fugit ducimus sapiente ea totam nam accusantium nulla at, tenetur dolore maiores facilis iure. Natus, autem eligendi.',
      status: 'TESTING',
    },
    {
      id: 4,
      title: 'DONE',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam optio perferendis, quidem fugit ducimus sapiente ea totam nam accusantium nulla at, tenetur dolore maiores facilis iure. Natus, autem eligendi.',
      status: 'DONE',
    },
  ];

  constructor() {}

  getAllTodo() {
    return this.todos;
  }
}
