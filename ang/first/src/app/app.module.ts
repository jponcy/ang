import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { DataListAsyncComponent } from './data-list-async/data-list-async.component';
import { DataListComponent } from './data-list/data-list.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

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
    AuthModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
