import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../services/api.service';
import * as config from '@environments/config';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-redirect-qr',
  templateUrl: './redirect-qr.component.html',
  styleUrls: ['./redirect-qr.component.scss']
})
export class RedirectQRComponent implements OnInit {

  loading = false;
  qrText: any;
  url: string;
  telLink: string;
  qrType: string;
  qrContact: any;
  adminView: string = '0';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: Service,
    public snackBar: MatSnackBar
  ) {
    this.url = this.activatedRoute.snapshot.params.id;
    this.adminView = this.activatedRoute.snapshot.queryParamMap.get('adminView');
  }

  ngOnInit() {
    if (!this.url) {
      this.router.navigate(['']);
    } else {
      this.getData();
    }
  }
  getData() {
    this.loading = true;
    this.service.makeAPICall(this.service.postMethod, this.service.redirectURL, { qrID: this.url, adminView: this.adminView }, (response) => {
      if (response.code !== 0) {
        if (response.code === 200) {
          let redirectLink: HTMLAnchorElement;
          this.qrType = response.qrType;
          switch (response.qrType) {
            case 'text':
              this.qrText = response.qrData;
              this.loading = false;
              break;
            case 'url':
              redirectLink = document.createElement('a');
              document.body.appendChild(redirectLink);
              redirectLink.style.display = 'none';
              redirectLink.href = response.qrData;
              redirectLink.click();
              this.loading = false;
              break;
            case 'tel':
              this.telLink = 'tel:' + response.qrData;
              redirectLink = document.createElement('a');
              document.body.appendChild(redirectLink);
              redirectLink.style.display = 'none';
              redirectLink.href = `tel:${response.qrData}`;
              redirectLink.click();
              this.loading = false;
              break;
            case 'email':
              redirectLink = document.createElement('a');
              document.body.appendChild(redirectLink);
              redirectLink.style.display = 'none';
              redirectLink.href = `mailto:${response.qrData.email}?subject=${response.qrData.subject}&body=${response.qrData.body}`;
              redirectLink.click();
              this.loading = false;
              break;
            case 'contact':
              this.qrContact = response.qrData;
              this.loading = false;
              break;
          }
        } else {
          config.flash(this.snackBar, response.message);
        }
      }
    });
  }
}
