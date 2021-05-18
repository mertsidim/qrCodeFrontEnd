(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-qr-static-qr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/static-qr/static-qr.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/static-qr/static-qr.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card style=\"box-shadow:none;\">\n    <mat-card-title>QR Kod</mat-card-title>\n    <mat-card-subtitle>QR Kodunuzu Üretin</mat-card-subtitle>\n    <mat-card-content>\n        <div gdAreas=\"side content\" gdGap=\"16px\" gdRows=\"auto auto\" gdAreas.lt-md=\"side | content\"\n            gdRows.lt-md=\"auto auto\">\n            <div gdArea=\"side\">\n                <mat-tab-group [selectedIndex]=\"tabIndex\" (selectedIndexChange)=\"tabIndex = $event\" mat-stretch-tabs>\n                    <mat-tab label=\"Text\">\n                        <form [formGroup]=\"textFormGroup\" style=\"padding: 5px\">\n                            <mat-form-field style=\"width: 100%;\">\n                                <textarea matInput name=\"text\" placeholder=\"Text\" formControlName=\"text\"\n                                    (keyup)=\"onLinkClick(); qrCode = textFormGroup.controls.text.value;\">\n                                    </textarea>\n                            </mat-form-field>\n                        </form>\n                    </mat-tab>\n                    <mat-tab label=\"URL\">\n                        <form [formGroup]=\"urlFormGroup\" style=\"padding: 5px\">\n                            <mat-form-field style=\"width: 100%;\">\n                                <input matInput name=\"url\" type=\"url\" placeholder=\"URL\" formControlName=\"url\"\n                                    (keyup)=\"onLinkClick(); qrCode = urlFormGroup.controls.url.valid ? urlFormGroup.controls.url.value : null;\">\n                                <mat-error\n                                    *ngIf=\"!urlFormGroup.controls.url.valid && urlFormGroup.controls.url.touched\">\n                                    URL is invalid\n                                </mat-error>\n                            </mat-form-field>\n                        </form>\n                    </mat-tab>\n                    <mat-tab label=\"Email\">\n                        <form [formGroup]=\"emailFormGroup\" style=\"margin-top: 5px; padding: 5px;\">\n                            <mat-form-field style=\"width: 100%;\">\n                                <input matInput name=\"email\" type=\"email\" placeholder=\"Email\" formControlName=\"email\"\n                                    (keyup)=\"onLinkClick(); emailQR(emailFormGroup.value)\">\n                                <mat-error\n                                    *ngIf=\"!emailFormGroup.controls.email.valid && emailFormGroup.controls.email.touched\">\n                                    Email is invalid\n                                </mat-error>\n                            </mat-form-field><br>\n                            <mat-form-field style=\"width: 100%;\">\n                                <input matInput name=\"subject\" placeholder=\"Subject\" formControlName=\"subject\"\n                                    (keyup)=\"onLinkClick(); emailQR(emailFormGroup.value)\">\n                            </mat-form-field><br>\n                            <mat-form-field style=\"width: 100%;\">\n                                <textarea matInput name=\"body\" placeholder=\"Body\" formControlName=\"body\"\n                                    (keyup)=\"onLinkClick(); emailQR(emailFormGroup.value)\">\n                                    </textarea>\n                            </mat-form-field><br>\n                        </form>\n                    </mat-tab>\n                    <mat-tab label=\"Phone\">\n                        <form [formGroup]=\"telFormGroup\" style=\"padding: 5px\">\n                            <mat-form-field style=\"width: 100%;\">\n                                <input matInput name=\"tel\" placeholder=\"Phone number\" formControlName=\"tel\"\n                                    (keyup)=\"onLinkClick(); qrCode = telFormGroup.controls.tel.valid ? 'tel:' + telFormGroup.controls['tel'].value : null;\">\n                                <mat-error\n                                    *ngIf=\"!telFormGroup.controls.tel.valid && telFormGroup.controls.tel.touched\">\n                                    Phone number is invalid\n                                </mat-error>\n                            </mat-form-field>\n                        </form>\n                    </mat-tab>\n                    <mat-tab label=\"Contact\">\n                        <form [formGroup]=\"contactFormGroup\" style=\"padding: 5px\">\n                            <mat-form-field style=\"width: 100%;\">\n                                <input matInput name=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\"\n                                    (keyup)=\"onLinkClick(); contactQR(contactFormGroup.value)\">\n                            </mat-form-field><br>\n                            <mat-form-field style=\"width: 100%;\">\n                                <input matInput name=\"lastName\" placeholder=\"last Name\" formControlName=\"lastName\"\n                                    (keyup)=\"onLinkClick(); contactQR(contactFormGroup.value)\">\n                            </mat-form-field><br>\n                            <mat-form-field style=\"width: 100%;\">\n                                <input matInput name=\"tel\" type=\"tel\" placeholder=\"Phone\" formControlName=\"tel\"\n                                    (keyup)=\"onLinkClick(); contactQR(contactFormGroup.value)\">\n                                <mat-error\n                                    *ngIf=\"!contactFormGroup.controls.tel.valid && contactFormGroup.controls.tel.touched\">\n                                    Phone number is invalid\n                                </mat-error>\n                            </mat-form-field><br>\n                            <mat-form-field style=\"width: 100%;\">\n                                <input matInput name=\"email\" type=\"email\" placeholder=\"Email\" formControlName=\"email\"\n                                    (keyup)=\"onLinkClick(); contactQR(contactFormGroup.value)\">\n                                <mat-error\n                                    *ngIf=\"!contactFormGroup.controls.email.valid && contactFormGroup.controls.email.touched\">\n                                    Email is invalid\n                                </mat-error>\n                            </mat-form-field>\n                        </form>\n                    </mat-tab>\n                </mat-tab-group>\n                <div>\n                    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"generateQrCode(false)\"\n                        [disabled]=\"!qrCode || qrCode === ''\">\n                        Generate QR Code\n                    </button>\n                </div>\n            </div>\n            <mat-card class=\"downloadQR\" gdArea=\"content\" style=\"padding-top: 0;\">\n                <mat-toolbar color=\"primary\">\n                    <button mat-icon-button [disabled]=\"!downloadQRFlag\" style=\"color: white;\" (click)=\"qrDownload()\"\n                        title=\"QR Kodunuzu İndirin\">\n                        <mat-icon style=\"color: white\">save_alt</mat-icon> Download\n                    </button>\n                    <span fxFlex></span>\n                    <button mat-icon-button (click)=\"openDialog()\" title=\"Configure your QR code\">\n                        <mat-icon>more_vert</mat-icon>\n                    </button>\n                </mat-toolbar>\n                <div class=\"qr-code\" #qrCodeEle></div>\n            </mat-card>\n        </div>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./src/app/static-qr/static-qr-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/static-qr/static-qr-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StaticQRRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQRRoutingModule", function() { return StaticQRRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _static_qr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-qr.component */ "./src/app/static-qr/static-qr.component.ts");




var routes = [{ path: '', component: _static_qr_component__WEBPACK_IMPORTED_MODULE_3__["StaticQRComponent"] }];
var StaticQRRoutingModule = /** @class */ (function () {
    function StaticQRRoutingModule() {
    }
    StaticQRRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StaticQRRoutingModule);
    return StaticQRRoutingModule;
}());



/***/ }),

/***/ "./src/app/static-qr/static-qr.component.scss":
/*!****************************************************!*\
  !*** ./src/app/static-qr/static-qr.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".qr-code {\n  text-align: center;\n  padding: 15px 10px;\n}\n\n.mat-card .mat-toolbar {\n  height: 48px;\n}\n\n::ng-deep .mat-tab-label,\n::ng-deep .mat-tab-label-active {\n  min-width: 50px !important;\n  padding: 3px !important;\n  margin: 3px !important;\n}\n\n.mat-card-content mat-card.mat-card {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljLXFyL0M6XFxVc2Vyc1xcbHljb2RcXERlc2t0b3BcXHFyY29kZWdlblxcYW5ndWxhci9zcmNcXGFwcFxcc3RhdGljLXFyXFxzdGF0aWMtcXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YXRpYy1xci9zdGF0aWMtcXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7O0VBRUksMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdGF0aWMtcXIvc3RhdGljLXFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFyLWNvZGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG59XG5cbi5tYXQtY2FyZCAubWF0LXRvb2xiYXIge1xuICAgIGhlaWdodDogNDhweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLFxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gICAgbWluLXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQgbWF0LWNhcmQubWF0LWNhcmQge1xuICAgIHBhZGRpbmc6IDA7XG59IiwiLnFyLWNvZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbn1cblxuLm1hdC1jYXJkIC5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogNDhweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLFxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIG1pbi13aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAzcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQgbWF0LWNhcmQubWF0LWNhcmQge1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/static-qr/static-qr.component.ts":
/*!**************************************************!*\
  !*** ./src/app/static-qr/static-qr.component.ts ***!
  \**************************************************/
/*! exports provided: StaticQRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQRComponent", function() { return StaticQRComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/config */ "./src/environments/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_qrConfig_qrConfig_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/qrConfig/qrConfig.component */ "./src/app/shared/qrConfig/qrConfig.component.ts");









var StaticQRComponent = /** @class */ (function () {
    function StaticQRComponent(formBuilder, service, router, snackBar, dialog) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.qrCode = '';
        this.loading = false;
        this.downloadQRFlag = false;
        this.qrConfigData = {
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
    }
    StaticQRComponent.prototype.ngOnInit = function () {
        this.createTextForm();
        this.createURLForm();
        this.createEmailForm();
        this.createTelForm();
        this.createContactForm();
        // this.onChanges();
    };
    StaticQRComponent.prototype.ngAfterViewInit = function () {
        // Options
        this.eQRCode = new QRCode(this.qrCodeEle.nativeElement, { text: '' });
    };
    StaticQRComponent.prototype.createTextForm = function () {
        this.textFormGroup = this.formBuilder.group({
            text: [null]
        });
    };
    StaticQRComponent.prototype.createURLForm = function () {
        this.urlFormGroup = this.formBuilder.group({
            url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_environments_config__WEBPACK_IMPORTED_MODULE_3__["urlReg"])]
        });
    };
    StaticQRComponent.prototype.createEmailForm = function () {
        this.emailFormGroup = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_environments_config__WEBPACK_IMPORTED_MODULE_3__["emailregex"])]],
            subject: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            body: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    StaticQRComponent.prototype.createTelForm = function () {
        this.telFormGroup = this.formBuilder.group({
            tel: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_environments_config__WEBPACK_IMPORTED_MODULE_3__["telReg"])]
        });
    };
    StaticQRComponent.prototype.createContactForm = function () {
        this.contactFormGroup = this.formBuilder.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_environments_config__WEBPACK_IMPORTED_MODULE_3__["telReg"])]],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_environments_config__WEBPACK_IMPORTED_MODULE_3__["emailregex"])],
            url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(_environments_config__WEBPACK_IMPORTED_MODULE_3__["urlReg"])]
        });
    };
    StaticQRComponent.prototype.onLinkClick = function () {
        if (this.tabIndex === 0
            && (this.textFormGroup.dirty)) {
            this.createURLForm();
            this.createTelForm();
            this.createEmailForm();
            this.createContactForm();
        }
        else if (this.tabIndex === 1
            && (this.urlFormGroup.dirty)) {
            this.createTextForm();
            this.createTelForm();
            this.createEmailForm();
            this.createContactForm();
        }
        else if (this.tabIndex === 2
            && (this.emailFormGroup.dirty)) {
            this.createTextForm();
            this.createURLForm();
            this.createTelForm();
            this.createContactForm();
        }
        else if (this.tabIndex === 3
            && (this.telFormGroup.dirty)) {
            this.createTextForm();
            this.createURLForm();
            this.createEmailForm();
            this.createContactForm();
        }
        else if (this.tabIndex === 4
            && (this.contactFormGroup.dirty)) {
            this.createTextForm();
            this.createURLForm();
            this.createEmailForm();
            this.createTelForm();
        }
    };
    StaticQRComponent.prototype.emailQR = function (val) {
        if (this.emailFormGroup.valid) {
            this.qrCode = "MATMSG:TO:" + val.email + ";SUB:" + val.subject + ";BODY:" + val.body + ";;";
        }
    };
    StaticQRComponent.prototype.contactQR = function (val) {
        if (this.contactFormGroup.valid) {
            this.qrCode = null;
            this.qrCode = "MECARD:N:" + val.firstName + "," + val.lastName + ";TEL:" + val.tel + ";";
            if (val.email !== null && this.qrCode !== null && this.qrCode !== '') {
                this.qrCode += ";EMAIL:'" + val.email;
            }
            if (val.url !== null && this.qrCode !== null && this.qrCode !== '') {
                this.qrCode += ";URL:" + val.url;
            }
            if (this.qrCode !== null && this.qrCode !== '') {
                this.qrCode += ';;';
            }
        }
        else {
            this.qrCode = null;
        }
    };
    StaticQRComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_qrConfig_qrConfig_component__WEBPACK_IMPORTED_MODULE_8__["ConfigQRComponent"], {
            height: 'auto',
            width: '500px',
            data: this.qrConfigData
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.qrConfigData = result;
                _this.generateQrCode(true);
            }
        });
    };
    StaticQRComponent.prototype.generateQrCode = function (reGenerateFlag) {
        if (this.qrConfigData) {
            if (reGenerateFlag) {
                // Options
                this.eQRCode.clear();
                var options = this.qrConfigData;
                options.text = this.qrCode;
                this.eQRCode = new QRCode(this.qrCodeEle.nativeElement, options);
            }
            else {
                this.eQRCode.makeCode(this.qrCode);
            }
            this.downloadQRFlag = true;
        }
    };
    StaticQRComponent.prototype.qrDownload = function () {
        var link = document.createElement('a');
        link.id = 'downloadLink';
        link.download = 'QR image';
        link.href = this.qrCodeEle.nativeElement.lastElementChild.src;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.getElementById('downloadLink').remove();
    };
    StaticQRComponent.prototype.createDynamicQR = function () {
        var _this = this;
        if (!this.service.getLocalStorage('authToken')) {
            this.router.navigate(['auth/login']);
        }
        else {
            var data = {
                qrName: '',
                qrCodeType: '',
                qrCodeContent: null
            };
            switch (this.tabIndex) {
                case 1:
                    if (!this.urlFormGroup.valid) {
                        return;
                    }
                    else {
                        data.qrCodeType = 'url';
                        data.qrCodeContent = this.urlFormGroup.controls.url.value;
                    }
                    break;
                case 2:
                    if (!this.emailFormGroup.valid) {
                        return;
                    }
                    else {
                        data.qrCodeType = 'email';
                        data.qrCodeContent = this.emailFormGroup.controls.value;
                    }
                    break;
                case 3:
                    if (!this.telFormGroup.valid) {
                        return;
                    }
                    else {
                        data.qrCodeType = 'tel';
                        data.qrCodeContent = this.telFormGroup.controls.tel.value;
                    }
                    break;
                case 4:
                    if (!this.contactFormGroup.valid) {
                        return;
                    }
                    else {
                        data.qrCodeType = 'contact';
                        data.qrCodeContent = this.contactFormGroup.value;
                    }
                    break;
                default:
                    data.qrCodeType = 'text';
                    data.qrCodeContent = this.textFormGroup.controls.text.value;
                    break;
            }
            this.service.makeAPICall(this.service.postMethod, this.service.createEditDynamicURL, data, function (response) {
                _this.loading = false;
                if (response.code !== 0) {
                    if (response.code === 200) {
                        var navigate = 'dashboard/code/' + response.data._id;
                        _this.router.navigate([navigate]);
                    }
                    else {
                        _environments_config__WEBPACK_IMPORTED_MODULE_3__["flash"](_this.snackBar, response.message);
                    }
                }
            });
        }
    };
    StaticQRComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('qrCodeEle', { static: false })
    ], StaticQRComponent.prototype, "qrCodeEle", void 0);
    StaticQRComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static-qr',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./static-qr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/static-qr/static-qr.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./static-qr.component.scss */ "./src/app/static-qr/static-qr.component.scss")).default]
        })
    ], StaticQRComponent);
    return StaticQRComponent;
}());



/***/ }),

/***/ "./src/app/static-qr/static-qr.module.ts":
/*!***********************************************!*\
  !*** ./src/app/static-qr/static-qr.module.ts ***!
  \***********************************************/
/*! exports provided: StaticQRModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQRModule", function() { return StaticQRModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _static_qr_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-qr-routing.module */ "./src/app/static-qr/static-qr-routing.module.ts");
/* harmony import */ var _static_qr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static-qr.component */ "./src/app/static-qr/static-qr.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







var StaticQRModule = /** @class */ (function () {
    function StaticQRModule() {
    }
    StaticQRModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_static_qr_component__WEBPACK_IMPORTED_MODULE_5__["StaticQRComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _static_qr_routing_module__WEBPACK_IMPORTED_MODULE_4__["StaticQRRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ]
        })
    ], StaticQRModule);
    return StaticQRModule;
}());



/***/ })

}]);
//# sourceMappingURL=static-qr-static-qr-module.js.map