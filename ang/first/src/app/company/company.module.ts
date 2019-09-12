import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntennaModule } from './antenna/antenna.module';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    AntennaModule
  ],
  exports: [CompanyListComponent]
})
export class CompanyModule { }
