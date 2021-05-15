import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Service } from '../services/api.service';
import * as config from '@environments/config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfigQRComponent } from '../shared/qrConfig/qrConfig.component';

declare const QRCode: any;

@Component({
  selector: 'app-dynamic-qr',
  templateUrl: './dynamic-qr.component.html',
  styleUrls: ['./dynamic-qr.component.scss']
})
export class DynamicQRComponent implements OnInit {
  qrCode: string = null;
  loadedQRID = false;
  titleFormGroup: FormGroup;
  textFormGroup: FormGroup;
  urlFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  telFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  tabIndex: number;
  editQRID: string;
  setQrSize = false;
  qrSize = 200;
  spinnerLoading = false;
  progressLoading = false;
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
//   qrTypeArr= [
//     {name: 'Option1', value: 'value1'},
//     {name: 'Option2', value: 'value2'}
//   ];

  @ViewChild('qrCodeEle', { static: false }) qrCodeEle: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: Service,
    public snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.editQRID = params.qrID;
      if (!this.editQRID) {
        this.router.navigate(['dashboard']);
      } else {
        this.qrCode = config.baseUrl + '/redirectQR/qrURL/' + this.editQRID;
        console.log(this.qrCode);
      }
    });
    this.createTitleForm();
    this.createTextForm();
    this.createURLForm();
    this.createEmailForm();
    this.createTelForm();
    this.createContactForm();
    this.getData(this.editQRID);
  }

  createTitleForm() {
    this.titleFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
    //   qrType: ['', Validators.required]
    });
  }

  createTextForm() {
    this.textFormGroup = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  createURLForm() {
    this.urlFormGroup = this.formBuilder.group({
      url: ['https://', [Validators.required, Validators.pattern(config.urlReg)]]
    });
  }

  createTelForm() {
    this.telFormGroup = this.formBuilder.group({
      tel: [null, [Validators.required, Validators.pattern(config.telReg)]]
    });
  }

  createEmailForm() {
    this.emailFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(config.emailregex)]],
      subject: [null, [Validators.required]],
      body: [null, [Validators.required]]
    });
  }

  createContactForm() {
    this.contactFormGroup = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      tel: [null, [Validators.required, Validators.pattern(config.telReg)]],
      email: [null, Validators.pattern(config.emailregex)]
    });
  }

  onLinkClick(): void {
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

  getData(editQRID: string) {
    this.progressLoading = true;
    this.service.makeAPICall(this.service.postMethod, this.service.getQRCodeByID, { qrID: editQRID }, (response) => {
      this.progressLoading = false;
      if (response.code !== 0) {
        if (response.code === 200) {
          if (response.data.qrName) {
            this.titleFormGroup.setValue({
              title: response.data.qrName,
            //   qrType: ''
            });
          }
          if (response.data.qrConfigData) {
            this.qrConfigData = response.data.qrConfigData;
          }
          const options = this.qrConfigData;
          options.text = this.qrCode;
          this.eQRCode = new QRCode(this.qrCodeEle.nativeElement, options);
          switch (response.data.qrCodeType) {
            case 'text':
              this.tabIndex = 0;
              setTimeout(() => {
                this.textFormGroup.setValue({
                  text: response.data.qrCodeContent
                });
              }, 100);
              break;
            case 'url':
              this.tabIndex = 1;
              setTimeout(() => {
                this.urlFormGroup.setValue({
                  url: response.data.qrCodeContent
                });
              }, 100);
              break;
            case 'email':
              this.tabIndex = 2;
              setTimeout(() => {
                this.emailFormGroup.setValue({
                  email: response.data.qrCodeContent.email,
                  subject: response.data.qrCodeContent.subject,
                  body: response.data.qrCodeContent.body
                });
              }, 100);
              break;
            case 'tel':
              this.tabIndex = 3;
              setTimeout(() => {
                this.telFormGroup.setValue({
                  tel: response.data.qrCodeContent
                });
              }, 100);
              break;
            case 'contact':
              this.tabIndex = 4;
              setTimeout(() => {
                this.contactFormGroup.setValue({
                  firstName: response.data.qrCodeContent.firstName,
                  lastName: response.data.qrCodeContent.lastName,
                  tel: response.data.qrCodeContent.tel,
                  email: response.data.qrCodeContent.email
                });
              }, 100);
              break;
            default:
              break;
          }
        } else {
          config.flash(this.snackBar, response.message);
        }
      }
    });
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
        this.createEditDynamicQR();
        this.generateQrCode(true);
      }
    });
  }

  generateQrCode(reGenerateFlag: boolean) {
    if (this.qrConfigData) {
      if (reGenerateFlag) {
        this.eQRCode.clear();
        const options = this.qrConfigData;
        options.text = this.qrCode;
        this.eQRCode = new QRCode(this.qrCodeEle.nativeElement, options);
      }
    }
  }

  createEditDynamicQR() {
    if (this.titleFormGroup.valid) {
        const { text, ...restConfig } = this.qrConfigData;
        const data = {
          _id: this.editQRID,
          qrName: this.titleFormGroup.valid ? this.titleFormGroup.controls.title.value : null,
        //   qrType: this.titleFormGroup.valid ? this.titleFormGroup.controls.qrType.value : null,
          qrCodeType: null,
          qrCodeContent: null,
          qrConfigData: restConfig
        };
        console.log(data);
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
              data.qrCodeContent = this.emailFormGroup.value;
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
        this.progressLoading = true;
        if (data.qrCodeType && data.qrCodeContent) {
            this.service.makeAPICall(this.service.postMethod, this.service.createEditDynamicURL, data, (response) => {
              if (response.code !== 0) {
                if (response.code === 200) {
                  this.progressLoading = false;
                } else {
                  config.flash(this.snackBar, response.message);
                }
              } else {
                config.flash(this.snackBar, 'Something went wrong!');
              }
            });
        }
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
}
