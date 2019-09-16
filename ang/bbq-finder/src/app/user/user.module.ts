import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormWrongWayComponent } from './user-form-wrong-way/user-form-wrong-way.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserFormWrongWayComponent, UserListComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  exports: [UserFormWrongWayComponent, UserListComponent]
})
export class UserModule { }
