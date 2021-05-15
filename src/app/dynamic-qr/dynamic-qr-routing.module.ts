import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicQRComponent } from './dynamic-qr.component';
import { PageNotFoundComponent } from '../shared/page-not-found';
import { CheckRoutes } from '../shared/middleware/check-routes';

const routes: Routes = [
  {
    path: '',
    canActivate: [CheckRoutes],
    component: DashboardComponent
  },
  {
    path: 'code/:qrID',
    canActivate: [CheckRoutes],
    component: DynamicQRComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicQRRoutingModule { }
