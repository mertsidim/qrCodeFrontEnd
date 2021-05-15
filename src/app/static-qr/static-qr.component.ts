import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Service } from '../services/api.service';
import * as config from '@environments/config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfigQRComponent } from '../shared/qrConfig/qrConfig.component';
declare const QRCode: any;

@Component({
  selector: 'app-static-qr',
  templateUrl: './static-qr.component.html',
  styleUrls: ['./static-qr.component.scss']
})
export class StaticQRComponent implements OnInit, AfterViewInit {

  qrCode = '';
  loading = false;
  downloadQRFlag = false;
  textFormGroup: FormGroup;
  urlFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  telFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  tabIndex: number;
  qrConfigData: any = {
    width: 256,
    height: 256,
    quietZone: 0,
    colorDark: '#000000',
    colorLight: '#ffffff',
    logo: null,
    logoWidth: null,
    logoHeight: null,
    logoBackgroundTransparent: false,
    logoBackgroundColor: '#ffffff',
    backgroundImage: null,
    backgroundImageAlpha: 1,
    autoColor: false,
    title: '',
    // titleFont: null,
    titleColor: '#000',
    titleBackgroundColor: '#fff',
    titleHeight: 0,
    subTitle: '',
    // subTitleFont: null,
    subTitleColor: '#004284',
  };
  eQRCode: any;

  // Your DOM Element
//   @ViewChild('qrConfig', { static: false }) qrConfig: TemplateRef<any>;
  @ViewChild('qrCodeEle', { static: false }) qrCodeEle: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private service: Service,
    public router: Router,
    public snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.createTextForm();
    this.createURLForm();
    this.createEmailForm();
    this.createTelForm();
    this.createContactForm();
    // this.onChanges();
  }

  ngAfterViewInit() {
    // Options
    this.eQRCode = new QRCode(this.qrCodeEle.nativeElement, { text: ''});
  }

  createTextForm() {
    this.textFormGroup = this.formBuilder.group({
      text: [null]
    });
  }

  createURLForm() {
    this.urlFormGroup = this.formBuilder.group({
      url: [null, Validators.pattern(config.urlReg)]
    });
  }

  createEmailForm() {
    this.emailFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(config.emailregex)]],
      subject: [null, [Validators.required]],
      body: [null, [Validators.required]]
    });
  }

  createTelForm() {
    this.telFormGroup = this.formBuilder.group({
      tel: [null, Validators.pattern(config.telReg)]
    });
  }

  createContactForm() {
    this.contactFormGroup = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      tel: [null, [Validators.required, Validators.pattern(config.telReg)]],
      email: [null, Validators.pattern(config.emailregex)],
      url: [null, Validators.pattern(config.urlReg)]
    });
  }

  onLinkClick() {
    if (this.tabIndex === 0
      && (
        this.textFormGroup.dirty
      )) {
      this.createURLForm();
      this.createTelForm();
      this.createEmailForm();
      this.createContactForm();
    } else if (this.tabIndex === 1
      && (
        this.urlFormGroup.dirty
      )) {
      this.createTextForm();
      this.createTelForm();
      this.createEmailForm();
      this.createContactForm();
    } else if (this.tabIndex === 2
      && (
        this.emailFormGroup.dirty
      )) {
      this.createTextForm();
      this.createURLForm();
      this.createTelForm();
      this.createContactForm();
    } else if (this.tabIndex === 3
      && (
        this.telFormGroup.dirty
      )) {
      this.createTextForm();
      this.createURLForm();
      this.createEmailForm();
      this.createContactForm();
    } else if (this.tabIndex === 4
      && (
        this.contactFormGroup.dirty
      )) {
      this.createTextForm();
      this.createURLForm();
      this.createEmailForm();
      this.createTelForm();
    }
  }

  emailQR(val: any) {
    if (this.emailFormGroup.valid) {
      this.qrCode = `MATMSG:TO:${val.email};SUB:${val.subject};BODY:${val.body};;`;
    }
  }

  contactQR(val: any) {
    if (this.contactFormGroup.valid) {
      this.qrCode = null;

      this.qrCode = `MECARD:N:${val.firstName},${val.lastName};TEL:${val.tel};`;
      if (val.email !== null && this.qrCode !== null && this.qrCode !== '') {
        this.qrCode += `;EMAIL:'${val.email}`;
      }
      if (val.url !== null && this.qrCode !== null && this.qrCode !== '') {
        this.qrCode += `;URL:${val.url}`;
      }
      if (this.qrCode !== null && this.qrCode !== '') {
        this.qrCode += ';;';
      }
    } else {
      this.qrCode = null;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfigQRComponent, {
      height: 'auto',
      width: '500px',
      data: this.qrConfigData
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.qrConfigData = result;
        this.generateQrCode(true);
      }
    });
  }

  generateQrCode(reGenerateFlag: boolean) {
    if (this.qrConfigData) {
      if (reGenerateFlag) {
        // Options
        this.eQRCode.clear();
        const options = this.qrConfigData;
        options.text = this.qrCode;
        this.eQRCode = new QRCode(this.qrCodeEle.nativeElement, options);
      } else {
        this.eQRCode.makeCode(this.qrCode);
      }
      this.downloadQRFlag = true;
    }
  }

  qrDownload() {
    const link = document.createElement('a');
    link.id = 'downloadLink';
    link.download = 'QR image';
    link.href = this.qrCodeEle.nativeElement.lastElementChild.src;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.getElementById('downloadLink').remove();
  }

  createDynamicQR() {
    if (!this.service.getLocalStorage('authToken')) {
      this.router.navigate(['auth/login']);
    } else {
      const data = {
        qrName: '',
        qrCodeType: '',
        qrCodeContent: null
      };
      switch (this.tabIndex) {
        case 1:
          if (!this.urlFormGroup.valid) {
            return;
          } else {
            data.qrCodeType = 'url';
            data.qrCodeContent = this.urlFormGroup.controls.url.value;
          }
          break;
        case 2:
          if (!this.emailFormGroup.valid) {
            return;
          } else {
            data.qrCodeType = 'email';
            data.qrCodeContent = this.emailFormGroup.controls.value;
          }
          break;
        case 3:
          if (!this.telFormGroup.valid) {
            return;
          } else {
            data.qrCodeType = 'tel';
            data.qrCodeContent = this.telFormGroup.controls.tel.value;
          }
          break;
        case 4:
          if (!this.contactFormGroup.valid) {
            return;
          } else {
            data.qrCodeType = 'contact';
            data.qrCodeContent = this.contactFormGroup.value;
          }
          break;
        default:
          data.qrCodeType = 'text';
          data.qrCodeContent = this.textFormGroup.controls.text.value;
          break;
      }
      this.service.makeAPICall(this.service.postMethod, this.service.createEditDynamicURL, data, (response) => {
        this.loading = false;
        if (response.code !== 0) {
          if (response.code === 200) {
            const navigate = 'dashboard/code/' + response.data._id;
            this.router.navigate([navigate]);
          } else {
            config.flash(this.snackBar, response.message);
          }
        }
      });
    }
  }

}
