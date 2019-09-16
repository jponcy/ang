import { Routes } from '@angular/router';
import { UserFormWrongWayComponent } from './user-form-wrong-way/user-form-wrong-way.component';
import { UserListComponent } from './user-list/user-list.component';

export const userRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: UserListComponent
}, {
  path: 'new',
  component: UserFormWrongWayComponent
}];
