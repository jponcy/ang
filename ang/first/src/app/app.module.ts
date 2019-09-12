import { DataListAsyncComponent } from './data-list-async/data-list-async.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { CompanyModule } from './company/company.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    DataListAsyncComponent
  ],
  imports: [
    BrowserModule,
    CompanyModule,
    HomeModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
