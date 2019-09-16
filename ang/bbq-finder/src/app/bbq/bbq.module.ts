import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BbqDetailsComponent } from './bbq-details/bbq-details.component';
import { BbqListComponent } from './bbq-list/bbq-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BbqDetailsComponent, BbqListComponent],
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [BbqDetailsComponent, BbqListComponent]
})
export class BbqModule { }
