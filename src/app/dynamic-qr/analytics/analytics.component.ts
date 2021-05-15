import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
})
export class AnalyticsComponent implements OnInit {

  chart: any;
  startDate = new FormControl();
  endDate = new FormControl();
  minDate: Date;
  maxDate: Date;

  constructor(
    public dialogRef: MatDialogRef<AnalyticsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    let last7Days: any = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));
    last7Days = (new Date(last7Days - last7Days.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);
    let created_At: any = new Date(data.created_At);
    created_At = (new Date(created_At - created_At.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);
    this.minDate = created_At;
    this.startDate.setValue(last7Days <= created_At ? created_At : last7Days);
    this.maxDate = new Date();
    this.endDate.setValue(this.maxDate);
  }

  ngOnInit() {
    this.setChart(this.startDate.value);
  }

  dateChanged() {
    this.setChart(this.startDate.value);
  }

  setChart(value: string | number | Date) {
    this.chart = new Chart({
      chart: {
        type: 'area',
        zoomType: 'x'
      },
      title: {
        text: `Analytics for ${this.data.qrName.charAt(0).toUpperCase() + this.data.qrName.slice(1)}`
      },
      lang: {
        contextButtonTitle: '',
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Date'
        },
        labels: {
          format: '{value:%Y-%m-%d}',
          rotation: -45,
          align: 'right'
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Scanned'
        }
      },
      plotOptions: {
        series: {
          pointStart: Date.UTC(new Date(value).getFullYear(), new Date(value).getMonth(), new Date(value).getDate()),
          pointInterval: 24 * 3600 * 1000
        }
      },
      series: [{
        name: this.data.qrName.charAt(0).toUpperCase() + this.data.qrName.slice(1),
        data: this.setDaysArray()
      }]
    } as any);
  }

  getDaysArray(start: any, end: any) {
    let listDate = [];
    let strDate: any = null;
    while (start <= end) {
      strDate = (new Date(start - start.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);
      listDate.push({ date: strDate, counter: 0 });
      start.setDate(start.getDate() + 1);
    };
    return listDate;
  };

  setDaysArray() {
    let daylist = this.getDaysArray(new Date(this.startDate.value), new Date(this.endDate.value));
    daylist.map(dateArrItem => {
      this.data.stats.map((item: { date: any; counter: any; }) => {
        if (dateArrItem.date == item.date) {
          dateArrItem.counter = item.counter
        }
      });
    });
    return daylist.map(item => item.counter);
  };

}
