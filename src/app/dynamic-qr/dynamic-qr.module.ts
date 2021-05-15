import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicQRRoutingModule } from './dynamic-qr-routing.module';
import { DynamicQRComponent } from './dynamic-qr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    DashboardComponent,
    DynamicQRComponent,
    AnalyticsComponent
  ],
  entryComponents: [
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    DynamicQRRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ChartModule,
  ]
})
export class DynamicQRModule { }
