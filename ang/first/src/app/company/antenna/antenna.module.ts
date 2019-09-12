import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntennaListComponent } from './antenna-list/antenna-list.component';

@NgModule({
  declarations: [AntennaListComponent],
  imports: [
    CommonModule
  ],
  exports: [AntennaListComponent]
})
export class AntennaModule { }
