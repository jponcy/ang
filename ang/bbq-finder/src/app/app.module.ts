import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FoodModule } from './food/food.module';
import { BbqModule } from './bbq/bbq.module';
import { PlaceModule } from './place/place.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FoodModule,
    BbqModule,
    PlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
