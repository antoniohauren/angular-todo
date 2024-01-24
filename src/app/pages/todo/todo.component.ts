import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroPlus } from '@ng-icons/heroicons/outline';
import { Todo, TodoForm, TodoStatus } from '../../core/models/todo.model';
import { TodoService } from '../../core/services/todo.service';
import { TodoCardComponent } from '../../shared/components/todo-card/todo-card.component';
import { SidePanelComponent } from '../../shared/ui/side-panel/side-panel.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCardComponent, NgIcon, SidePanelComponent, ReactiveFormsModule],
  providers: [provideIcons({ heroPlus })],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup<TodoForm>;
  todos: Todo[] = [];
  todoStatus = TodoStatus;

  isSidePanelOpen = false;

  constructor(
    private readonly todoService: TodoService,
    private readonly fb: FormBuilder
  ) {
    this.todoForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('OPEN', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todos = this.todoService.getAllTodo();
  }

  onCloseSidePanel() {
    this.isSidePanelOpen = false;
  }

  onOpenSidePanel() {
    this.isSidePanelOpen = true;
  }

  onSubmit() {
    if (this.todoForm.valid) {
    } else {
      this.todoForm.markAllAsTouched();
    }
  }
}
