import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticQRComponent } from './static-qr.component';

const routes: Routes = [{ path: '', component: StaticQRComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticQRRoutingModule { }
