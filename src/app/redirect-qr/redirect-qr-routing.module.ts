import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectQRComponent } from './redirect-qr.component';
import { PageNotFoundComponent } from '../shared/page-not-found';

const routes: Routes = [
  { path: 'qrURL/:id', component: RedirectQRComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedirectQRRoutingModule { }
