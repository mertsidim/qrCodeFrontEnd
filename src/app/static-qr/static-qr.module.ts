import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StaticQRRoutingModule } from './static-qr-routing.module';
import { StaticQRComponent } from './static-qr.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StaticQRComponent],
  imports: [
    CommonModule,
    StaticQRRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class StaticQRModule { }
