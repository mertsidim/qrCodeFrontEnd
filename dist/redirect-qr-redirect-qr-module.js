(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redirect-qr-redirect-qr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/redirect-qr/redirect-qr.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redirect-qr/redirect-qr.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\" class=\"loader-margin\">\n  <mat-progress-spinner class=\"loader\" color=\"primary\" mode=\"indeterminate\" value=\"value\">\n  </mat-progress-spinner>\n</div>\n<mat-card *ngIf=\"!loading\">\n  <span [ngSwitch]=\"qrType\">\n    <div *ngSwitchCase=\"'text'\">\n      <p>{{qrText}}</p>\n    </div>\n    <!-- <div *ngSwitchCase=\"'tel'\">\n      <a href=\"{{telLink}}\">{{qrText}}</a>\n      <p style=\"color: aqua\">Phone</p>\n    </div> -->\n    <div *ngSwitchCase=\"'contact'\">\n      <p *ngIf=\"qrContact.firstName !== null\">First Name: {{qrContact.firstName}}</p>\n      <p *ngIf=\"qrContact.lastName !== null\">Last Name: {{qrContact.lastName}}</p>\n      <p>Phone: <a *ngIf=\"qrContact.tel !== null\" href=\"tel:{{qrContact.tel}}\">{{qrContact.tel}}</a></p>\n      <p *ngIf=\"qrContact.email !== null\">Email: <a href=\"mailto:{{qrContact.email}}\">{{qrContact.email}}</a></p>\n    </div>\n  </span>\n</mat-card>");

/***/ }),

/***/ "./src/app/redirect-qr/redirect-qr-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/redirect-qr/redirect-qr-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RedirectQRRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectQRRoutingModule", function() { return RedirectQRRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _redirect_qr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-qr.component */ "./src/app/redirect-qr/redirect-qr.component.ts");
/* harmony import */ var _shared_page_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/page-not-found */ "./src/app/shared/page-not-found.ts");





var routes = [
    { path: 'qrURL/:id', component: _redirect_qr_component__WEBPACK_IMPORTED_MODULE_3__["RedirectQRComponent"] },
    { path: '**', component: _shared_page_not_found__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var RedirectQRRoutingModule = /** @class */ (function () {
    function RedirectQRRoutingModule() {
    }
    RedirectQRRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RedirectQRRoutingModule);
    return RedirectQRRoutingModule;
}());



/***/ }),

/***/ "./src/app/redirect-qr/redirect-qr.component.scss":
/*!********************************************************!*\
  !*** ./src/app/redirect-qr/redirect-qr.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader-margin {\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.loader {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkaXJlY3QtcXIvQzpcXFVzZXJzXFxseWNvZFxcRGVza3RvcFxccXJjb2RlZ2VuXFxhbmd1bGFyL3NyY1xcYXBwXFxyZWRpcmVjdC1xclxccmVkaXJlY3QtcXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZGlyZWN0LXFyL3JlZGlyZWN0LXFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWRpcmVjdC1xci9yZWRpcmVjdC1xci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItbWFyZ2luIHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG5cbi5sb2FkZXIge1xuICAgIG1hcmdpbjogYXV0bztcbn0iLCIubG9hZGVyLW1hcmdpbiB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG9hZGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/redirect-qr/redirect-qr.component.ts":
/*!******************************************************!*\
  !*** ./src/app/redirect-qr/redirect-qr.component.ts ***!
  \******************************************************/
/*! exports provided: RedirectQRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectQRComponent", function() { return RedirectQRComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/config */ "./src/environments/config.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var RedirectQRComponent = /** @class */ (function () {
    function RedirectQRComponent(router, activatedRoute, service, snackBar) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.snackBar = snackBar;
        this.loading = false;
        this.adminView = '0';
        this.url = this.activatedRoute.snapshot.params.id;
        this.adminView = this.activatedRoute.snapshot.queryParamMap.get('adminView');
    }
    RedirectQRComponent.prototype.ngOnInit = function () {
        if (!this.url) {
            this.router.navigate(['']);
        }
        else {
            this.getData();
        }
    };
    RedirectQRComponent.prototype.getData = function () {
        var _this = this;
        this.loading = true;
        this.service.makeAPICall(this.service.postMethod, this.service.redirectURL, { qrID: this.url, adminView: this.adminView }, function (response) {
            if (response.code !== 0) {
                if (response.code === 200) {
                    var redirectLink = void 0;
                    _this.qrType = response.qrType;
                    switch (response.qrType) {
                        case 'text':
                            _this.qrText = response.qrData;
                            _this.loading = false;
                            break;
                        case 'url':
                            redirectLink = document.createElement('a');
                            document.body.appendChild(redirectLink);
                            redirectLink.style.display = 'none';
                            redirectLink.href = response.qrData;
                            redirectLink.click();
                            _this.loading = false;
                            break;
                        case 'tel':
                            _this.telLink = 'tel:' + response.qrData;
                            redirectLink = document.createElement('a');
                            document.body.appendChild(redirectLink);
                            redirectLink.style.display = 'none';
                            redirectLink.href = "tel:" + response.qrData;
                            redirectLink.click();
                            _this.loading = false;
                            break;
                        case 'email':
                            redirectLink = document.createElement('a');
                            document.body.appendChild(redirectLink);
                            redirectLink.style.display = 'none';
                            redirectLink.href = "mailto:" + response.qrData.email + "?subject=" + response.qrData.subject + "&body=" + response.qrData.body;
                            redirectLink.click();
                            _this.loading = false;
                            break;
                        case 'contact':
                            _this.qrContact = response.qrData;
                            _this.loading = false;
                            break;
                    }
                }
                else {
                    _environments_config__WEBPACK_IMPORTED_MODULE_4__["flash"](_this.snackBar, response.message);
                }
            }
        });
    };
    RedirectQRComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["Service"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    RedirectQRComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redirect-qr',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./redirect-qr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/redirect-qr/redirect-qr.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./redirect-qr.component.scss */ "./src/app/redirect-qr/redirect-qr.component.scss")).default]
        })
    ], RedirectQRComponent);
    return RedirectQRComponent;
}());



/***/ }),

/***/ "./src/app/redirect-qr/redirect-qr.module.ts":
/*!***************************************************!*\
  !*** ./src/app/redirect-qr/redirect-qr.module.ts ***!
  \***************************************************/
/*! exports provided: RedirectQRModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectQRModule", function() { return RedirectQRModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _redirect_qr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-qr-routing.module */ "./src/app/redirect-qr/redirect-qr-routing.module.ts");
/* harmony import */ var _redirect_qr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redirect-qr.component */ "./src/app/redirect-qr/redirect-qr.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var RedirectQRModule = /** @class */ (function () {
    function RedirectQRModule() {
    }
    RedirectQRModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _redirect_qr_component__WEBPACK_IMPORTED_MODULE_4__["RedirectQRComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _redirect_qr_routing_module__WEBPACK_IMPORTED_MODULE_3__["RedirectQRRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ]
        })
    ], RedirectQRModule);
    return RedirectQRModule;
}());



/***/ })

}]);
//# sourceMappingURL=redirect-qr-redirect-qr-module.js.map