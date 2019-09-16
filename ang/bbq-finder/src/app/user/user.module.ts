import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormWrongWayComponent } from './user-form-wrong-way/user-form-wrong-way.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserFormWrongWayComponent, UserListComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [UserFormWrongWayComponent, UserListComponent]
})
export class UserModule { }
