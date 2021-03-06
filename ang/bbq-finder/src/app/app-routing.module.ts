import { BbqDetailsComponent } from './bbq/bbq-details/bbq-details.component';
import { BbqListComponent } from './bbq/bbq-list/bbq-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { userRoutes } from './user/user-routing';

const routes: Routes = [{
  path: 'bbq',
  component: BbqListComponent
}, {
  path: 'bbq/:id/details',
  component: BbqDetailsComponent
}, {
  path: 'user',
  children: userRoutes
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'bbq'
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
