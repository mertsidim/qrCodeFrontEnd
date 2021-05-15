import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedirectQRRoutingModule } from './redirect-qr-routing.module';
import { RedirectQRComponent } from './redirect-qr.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RedirectQRComponent,
    // PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RedirectQRRoutingModule,
    SharedModule,
  ]
})
export class RedirectQRModule { }
