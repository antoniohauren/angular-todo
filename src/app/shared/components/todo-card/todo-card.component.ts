import { Component, Input } from '@angular/core';
import { Todo, TodoType } from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input() type: TodoType = 'OPEN';
  @Input() todo!: Todo;
}
