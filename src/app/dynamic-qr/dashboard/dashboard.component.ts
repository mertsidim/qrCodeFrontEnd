import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Service } from '../../services/api.service';
import * as config from '@environments/config';
import { AnalyticsComponent } from '../analytics/analytics.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading = false;
  codes = [];
  userID: string;
  displayColumns: string[] = ['name', 'type', 'created_At', 'actions'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  totalLength = 0;
  pageIndex = 0;
  pageLimit = 10;
  matDataSource: any;
  dataSource: any;
  config = config;

  constructor(
    private router: Router,
    private service: Service,
    public snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.config = config;
  }

  ngOnInit() {
    this.getData();
  }

  changePage(event: { pageIndex: number; pageSize: number; }) {
    if (this.totalLength > this.dataSource.length) {
      this.pageIndex = event.pageIndex;
      this.pageLimit = event.pageSize;
      this.getData(event.pageIndex, event.pageSize);
    }
  }

  getData(page = 0, limit = 10) {
    this.loading = true;
    this.service.makeAPICall(this.service.postMethod, this.service.getUserQRCodes, { pageOffset: page, pageLimit: limit }, (response) => {
      this.loading = false;
      if (response.code !== 0) {
        if (response.code === 200) {
          if (response.data) {
            this.codes = response.data;
            this.totalLength = response.data.totalQRCodes;
            this.dataSource = response.data.qrCodes;
            const ELEMENT_DATA = response.data.qrCodes;
            this.matDataSource = new MatTableDataSource(ELEMENT_DATA);
            setTimeout(() => {
              this.matDataSource.sort = this.sort;
              this.matDataSource.paginator = this.paginator;
            }, 500);
          }
        } else {
          config.flash(this.snackBar, response.message);
        }
      }
    });
  }

  applyFilter(filterValue: string) {
    this.matDataSource.filter = filterValue.trim().toLowerCase();
    if (this.matDataSource.paginator) {
      this.matDataSource.paginator.firstPage();
    }
  }

  viewAnalytics(id: string, qrName: string, created_At: any) {
    this.service.makeAPICall(this.service.postMethod, this.service.getQRCodeAnalyticsByID, { qrID: id }, (response) => {
      this.loading = false;
      if (response.code !== 0) {
        if (response.code === 200) {
          this.dialog.open(AnalyticsComponent, {
            height: 'auto',
            width: '800px',
            data: {
              stats: response.data.stats,
              qrName: qrName,
              created_At: created_At
            }
          });
        } else {
          config.flash(this.snackBar, response.message);
        }
      }
    });
  }

  deleteQRCode(id: string) {
    if (confirm('Are you sure want to delete permanently?')) {
      this.loading = true;
      this.service.makeAPICall(this.service.postMethod, this.service.deleteQRCodeByID, { qrID: id }, (response) => {
        this.loading = false;
        if (response.code !== 0) {
          if (response.code === 200) {
            this.getData();
            config.flash(this.snackBar, response.message);
          } else {
            config.flash(this.snackBar, response.message);
          }
        }
      });
    }
  }

  createDynamicQR() {
    if (!this.service.getLocalStorage('authToken')) {
      this.router.navigate(['auth/login']);
    } else {
      const data = {
        qrName: '',
        qrCodeType: 'text',
        qrCodeContent: null
      };
      this.service.makeAPICall(this.service.postMethod, this.service.createEditDynamicURL, data, (response) => {
        this.loading = false;
        if (response.code !== 0) {
          if (response.code === 200) {
            const navigator = 'dashboard/code/' + response.data._id;
            this.router.navigate([navigator]);
          } else {
            config.flash(this.snackBar, response.message);
          }
        }
      });
    }
  }

}
