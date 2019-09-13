import { BbqDetailsComponent } from './bbq/bbq-details/bbq-details.component';
import { BbqListComponent } from './bbq/bbq-list/bbq-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'bbq',
  component: BbqListComponent
}, {
  path: 'bbq/details',
  component: BbqDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
