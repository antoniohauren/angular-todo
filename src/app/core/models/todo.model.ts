import { FormControl } from '@angular/forms';

export type TodoType = 'OPEN' | 'PROGRESS' | 'TESTING' | 'DONE';
export const TodoStatus: TodoType[] = ['OPEN', 'PROGRESS', 'TESTING', 'DONE'];

export type Todo = {
  id?: number;
  title: string;
  description: string;
  status: TodoType;
  created_at?: string;
  updated_at?: string;
};

export type TodoForm = {
  title: FormControl;
  description: FormControl;
  status: FormControl;
};
