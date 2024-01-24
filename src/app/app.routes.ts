import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './pages/todo/todo.component';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { MainComponent } from './shared/layouts/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: '',
    component: MainComponent,
    children: [{ path: 'todo', component: TodoComponent }],
  },
];
