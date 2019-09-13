import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BbqDetailsComponent } from './bbq-details/bbq-details.component';
import { BbqListComponent } from './bbq-list/bbq-list.component';

@NgModule({
  declarations: [BbqDetailsComponent, BbqListComponent],
  imports: [
    CommonModule
  ],
  exports: [BbqDetailsComponent, BbqListComponent]
})
export class BbqModule { }
