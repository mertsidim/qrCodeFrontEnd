(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"background-color: #2a3051;\" class=\"topbar\">\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"\">\n            <img id=\"authLogo\" src=\"{{config.logo}}\" width=\"159\" class=\"light-logo\" alt=\"homepage\">\n        </a>\n    </div>\n    <span fxFlex></span>\n    <button routerLink=\"/\" type=\"button\" mat-raised-button color=\"primary\">\n        <mat-icon>home</mat-icon> Home\n    </button>\n</mat-toolbar>\n\n<div class=\"container bg\" *ngIf=\"formFlag\">\n    <mat-progress-spinner style=\"margin: 0 auto;top: 50%;\" *ngIf=\"loading\" color=\"primary\" mode=\"indeterminate\">\n    </mat-progress-spinner>\n    <mat-card *ngIf=\"!loading\">\n        <mat-card-title>Login</mat-card-title>\n        <mat-card-content>\n            <form class=\"form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-element\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Username\" formControlName=\"userName\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls['userName'].valid && formGroup.controls['userName'].touched\">\n                            This field is required.\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"form-element\">\n                    <mat-form-field>\n                        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n                            {{ getErrorPassword() }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <br>\n                <div gdAreas=\"side content\" gdRows=\"auto\">\n                    <div gdArea=\"side\" fxLayoutAlign=\"flex-start\">\n                        <button type=\"button\" mat-raised-button routerLink=\"/auth/register\"\n                            color=\"primary\">Create New Account</button>\n                    </div>\n                    <div gdArea=\"content\" fxLayoutAlign=\"flex-end\">\n                        <button type=\"submit\" mat-raised-button [disabled]=\"!formGroup.valid\"\n                            color=\"primary\">Login</button>\n                    </div>\n                </div>\n            </form>\n        </mat-card-content>\n    </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"background-color: #2a3051;\" class=\"topbar\">\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"\">\n            <img id=\"authLogo\" src=\"{{config.logo}}\" width=\"159\" class=\"light-logo\" alt=\"homepage\">\n        </a>\n    </div>\n    <span fxFlex></span>\n    <button routerLink=\"/\" type=\"button\" mat-raised-button color=\"primary\">\n        <mat-icon>home</mat-icon> Home\n    </button>\n</mat-toolbar>\n<div class=\"container bg\" *ngIf=\"formFlag\">\n    <mat-progress-spinner style=\"margin: 0 auto;top: 50%;\" *ngIf=\"loading\" color=\"primary\" mode=\"indeterminate\">\n    </mat-progress-spinner>\n    <mat-card *ngIf=\"!loading\">\n        <mat-card-title>Register</mat-card-title>\n        <mat-card-content>\n            <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\" class=\"form\">\n                <div class=\"form-element\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls['firstName'].valid && formGroup.controls['firstName'].touched\">\n                            {{ required }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-element\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls['lastName'].valid && formGroup.controls['lastName'].touched\">\n                            {{ required }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-element\">\n                    <mat-form-field>\n                        <input matInput type=\"email\" placeholder=\"Email Address\" formControlName=\"email\">\n                        <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n                            {{ getErrorEmail() }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-element\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"User Name\" formControlName=\"userName\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls['userName'].valid && formGroup.controls['userName'].touched\">\n                            {{ required }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-element\">\n                    <mat-form-field>\n                        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n                            {{ getErrorPassword() }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-element\">\n                    <mat-form-field>\n                        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"confirmPassword\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls['confirmPassword'].valid && formGroup.controls['confirmPassword'].touched\">\n                            {{ getErrorConfirmPassword() }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <mat-card-actions>\n                    <div gdAreas=\"side content\" gdRows=\"auto\">\n                        <div gdArea=\"side\" fxLayoutAlign=\"start\">\n                            <button type=\"button\" mat-raised-button routerLink=\"/auth/login\" color=\"primary\">Already\n                                have an account?</button>\n                        </div>\n                        <div gdArea=\"content\" fxLayoutAlign=\"end\">\n                            <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!formGroup.valid\">Sign\n                                up</button>\n                        </div>\n                    </div>\n                </mat-card-actions>\n            </form>\n        </mat-card-content>\n    </mat-card>\n</div>");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _shared_page_not_found__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/page-not-found */ "./src/app/shared/page-not-found.ts");






var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: '**', component: _shared_page_not_found__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                // FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 10% 0px;\n}\n\n::ng-deep .mat-form-field {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title,\nmat-card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.error {\n  padding: 10px;\n  width: 300px;\n  color: white;\n  background-color: red;\n}\n\nmat-card.mat-card {\n  max-width: 500px;\n  width: 100%;\n  box-shadow: none;\n  border: 1px solid #ccc;\n}\n\nform.form {\n  width: 100%;\n}\n\n.bg {\n  display: -webkit-box;\n  display: flex;\n  background: #dedede;\n  height: calc(100vh - 65px);\n  margin: auto;\n}\n\n.bg mat-card.mat-card.ng-star-inserted {\n  margin: auto;\n}\n\n.bg mat-card-title {\n  font-weight: bold;\n}\n\n/* ::ng-deep .bg .mat-form-field-infix input{    font-size: 15px; line-height: 1.5; color: #666666; display: block; width: 100%;background: #e6e6e6;height: 50px;border-radius: 25px;padding: 0 30px;box-sizing: border-box}\n::ng-deep .bg .mat-form-field-infix input::placeholder{color: #ddd;display: block;} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXGx5Y29kXFxEZXNrdG9wXFxxcmNvZGVnZW5cXGFuZ3VsYXIvc3JjXFxhcHBcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTs7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENFO0VBQWtCLGdCQUFBO0VBQWdCLFdBQUE7RUFBVyxnQkFBQTtFQUFnQixzQkFBQTtBQ00vRDs7QURMRTtFQUFVLFdBQUE7QUNTWjs7QURSQTtFQUFJLG9CQUFBO0VBQUEsYUFBQTtFQUFlLG1CQUFBO0VBQW9CLDBCQUFBO0VBQTJCLFlBQUE7QUNlbEU7O0FEZEE7RUFBdUMsWUFBQTtBQ2tCdkM7O0FEakJBO0VBQW1CLGlCQUFBO0FDcUJuQjs7QURwQkE7cUZBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwJSAwcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgbWF0LWNhcmQtdGl0bGUsIFxuICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmVycm9yIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG4gIG1hdC1jYXJkLm1hdC1jYXJke21heC13aWR0aDo1MDBweDt3aWR0aDoxMDAlO2JveC1zaGFkb3c6bm9uZTtib3JkZXI6MXB4IHNvbGlkICNjY2M7fVxuICBmb3JtLmZvcm17d2lkdGg6MTAwJTt9XG4uYmd7ZGlzcGxheTogZmxleDsgYmFja2dyb3VuZDogI2RlZGVkZTtoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTttYXJnaW46IGF1dG87fVxuLmJnIG1hdC1jYXJkLm1hdC1jYXJkLm5nLXN0YXItaW5zZXJ0ZWR7bWFyZ2luOmF1dG99XG4uYmcgbWF0LWNhcmQtdGl0bGV7Zm9udC13ZWlnaHQ6Ym9sZH1cbi8qIDo6bmctZGVlcCAuYmcgLm1hdC1mb3JtLWZpZWxkLWluZml4IGlucHV0eyAgICBmb250LXNpemU6IDE1cHg7IGxpbmUtaGVpZ2h0OiAxLjU7IGNvbG9yOiAjNjY2NjY2OyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7YmFja2dyb3VuZDogI2U2ZTZlNjtoZWlnaHQ6IDUwcHg7Ym9yZGVyLXJhZGl1czogMjVweDtwYWRkaW5nOiAwIDMwcHg7Ym94LXNpemluZzogYm9yZGVyLWJveH1cbjo6bmctZGVlcCAuYmcgLm1hdC1mb3JtLWZpZWxkLWluZml4IGlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjogI2RkZDtkaXNwbGF5OiBibG9jazt9ICovIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwJSAwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbm1hdC1jYXJkLm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbmZvcm0uZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NXB4KTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYmcgbWF0LWNhcmQubWF0LWNhcmQubmctc3Rhci1pbnNlcnRlZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmJnIG1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIDo6bmctZGVlcCAuYmcgLm1hdC1mb3JtLWZpZWxkLWluZml4IGlucHV0eyAgICBmb250LXNpemU6IDE1cHg7IGxpbmUtaGVpZ2h0OiAxLjU7IGNvbG9yOiAjNjY2NjY2OyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7YmFja2dyb3VuZDogI2U2ZTZlNjtoZWlnaHQ6IDUwcHg7Ym9yZGVyLXJhZGl1czogMjVweDtwYWRkaW5nOiAwIDMwcHg7Ym94LXNpemluZzogYm9yZGVyLWJveH1cbjo6bmctZGVlcCAuYmcgLm1hdC1mb3JtLWZpZWxkLWluZml4IGlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjogI2RkZDtkaXNwbGF5OiBibG9jazt9ICovIl19 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @environments/config */ "./src/environments/config.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, service, snackBar) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.config = _environments_config__WEBPACK_IMPORTED_MODULE_6__;
        this.loading = false;
        this.formFlag = false;
        this.config = _environments_config__WEBPACK_IMPORTED_MODULE_6__;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.service.getLocalStorage('authToken')) {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.formFlag = true;
            this.createForm();
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var settings = JSON.parse(localStorage.getItem('settings'));
        if (settings) {
            settings.forEach(function (element) {
                if (element.name === 'logo.png' && element.status === true) {
                    document.getElementById('authLogo').setAttribute('src', _environments_config__WEBPACK_IMPORTED_MODULE_6__["imagePath"] + "logo.png");
                }
            });
        }
    };
    LoginComponent.prototype.createForm = function () {
        this.formGroup = this.formBuilder.group({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.checkPassword])
        });
    };
    LoginComponent.prototype.checkPassword = function (control) {
        var enteredPassword = control.value;
        var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
    };
    LoginComponent.prototype.getErrorPassword = function () {
        return this.formGroup.get('password').hasError('required') ? 'This field is required' :
            this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formGroup.valid) {
            this.loading = true;
            var userData = {
                userName: this.formGroup.controls.userName.value,
                password: this.config.encryptString(this.formGroup.controls.password.value)
            };
            this.service.makeAPICall(this.service.postMethod, this.service.loginAPI, userData, function (response) {
                _this.loading = false;
                if (response.code !== 0) {
                    if (response.code === 200) {
                        localStorage.setItem('authToken', response.authToken);
                        localStorage.setItem('userInfo', JSON.stringify(response.data));
                        _this.router.navigate(['dashboard']);
                    }
                    else {
                        _environments_config__WEBPACK_IMPORTED_MODULE_6__["flash"](_this.snackBar, response.message);
                    }
                }
                else {
                    _environments_config__WEBPACK_IMPORTED_MODULE_6__["flash"](_this.snackBar, 'Something went wrong!');
                }
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["Service"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 2% 0px;\n}\n\n::ng-deep .mat-form-field {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title,\nmat-card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.form-element {\n  padding: 5px 0px 10px 2px;\n}\n\n.button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\nmat-card.mat-card {\n  max-width: 500px;\n  width: 100%;\n  box-shadow: none;\n  border: 1px solid #ccc;\n}\n\nform.form {\n  width: 100%;\n}\n\n.bg {\n  display: -webkit-box;\n  display: flex;\n  background: #dedede;\n  height: calc(100vh - 65px);\n  margin: auto;\n}\n\n.bg mat-card.mat-card.ng-star-inserted {\n  margin: auto;\n}\n\n.bg mat-card-title {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9DOlxcVXNlcnNcXGx5Y29kXFxEZXNrdG9wXFxxcmNvZGVnZW5cXGFuZ3VsYXIvc3JjXFxhcHBcXGF1dGhcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0NGOztBRENBO0VBQWtCLGdCQUFBO0VBQWdCLFdBQUE7RUFBVyxnQkFBQTtFQUFnQixzQkFBQTtBQ003RDs7QURMRTtFQUFVLFdBQUE7QUNTWjs7QURQQTtFQUFJLG9CQUFBO0VBQUEsYUFBQTtFQUFlLG1CQUFBO0VBQW9CLDBCQUFBO0VBQTJCLFlBQUE7QUNjbEU7O0FEYkE7RUFBdUMsWUFBQTtBQ2lCdkM7O0FEaEJBO0VBQW1CLGlCQUFBO0FDb0JuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMiUgMHB4O1xuICB9XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtLWVsZW1lbnQge1xuICBwYWRkaW5nOiA1cHggMHB4IDEwcHggMnB4O1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbm1hdC1jYXJkLm1hdC1jYXJke21heC13aWR0aDo1MDBweDt3aWR0aDoxMDAlO2JveC1zaGFkb3c6bm9uZTtib3JkZXI6MXB4IHNvbGlkICNjY2M7fVxuICBmb3JtLmZvcm17d2lkdGg6MTAwJTt9XG5cbi5iZ3tkaXNwbGF5OiBmbGV4OyBiYWNrZ3JvdW5kOiAjZGVkZWRlO2hlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpO21hcmdpbjogYXV0bzt9XG4uYmcgbWF0LWNhcmQubWF0LWNhcmQubmctc3Rhci1pbnNlcnRlZHttYXJnaW46YXV0b31cbi5iZyBtYXQtY2FyZC10aXRsZXtmb250LXdlaWdodDpib2xkfSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyJSAwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtLWVsZW1lbnQge1xuICBwYWRkaW5nOiA1cHggMHB4IDEwcHggMnB4O1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxubWF0LWNhcmQubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuZm9ybS5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5iZyBtYXQtY2FyZC5tYXQtY2FyZC5uZy1zdGFyLWluc2VydGVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYmcgbWF0LWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @environments/config */ "./src/environments/config.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, service, snackBar) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.required = 'This field is required';
        this.post = '';
        this.loading = false;
        this.formFlag = false;
        this.config = _environments_config__WEBPACK_IMPORTED_MODULE_6__;
        this.config = _environments_config__WEBPACK_IMPORTED_MODULE_6__;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.service.getLocalStorage('authToken')) {
            this.router.navigate(['dashboard']);
        }
        else {
            this.formFlag = true;
            this.createForm();
        }
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        var settings = JSON.parse(localStorage.getItem('settings'));
        if (settings) {
            settings.forEach(function (element) {
                if (element.name === 'logo.png' && element.status === true) {
                    document.getElementById('authLogo').setAttribute('src', _environments_config__WEBPACK_IMPORTED_MODULE_6__["imagePath"] + "logo.png");
                }
            });
        }
    };
    RegisterComponent.prototype.createForm = function () {
        this.formGroup = this.formBuilder.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_environments_config__WEBPACK_IMPORTED_MODULE_6__["emailregex"])]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.checkPassword]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
    };
    RegisterComponent.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.missMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ missMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    RegisterComponent.prototype.checkPassword = function (control) {
        var enteredPassword = control.value;
        var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
    };
    RegisterComponent.prototype.getErrorEmail = function () {
        return this.formGroup.get('email').hasError('required') ? 'This field is required' :
            this.formGroup.get('email').hasError('pattern') ? 'Enter a valid email Address' :
                this.formGroup.get('email').hasError('alreadyInUse') ? 'This email Address is already in use' : '';
    };
    RegisterComponent.prototype.getErrorPassword = function () {
        return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
            this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
    };
    RegisterComponent.prototype.getErrorConfirmPassword = function () {
        return this.formGroup.get('confirmPassword').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
            this.formGroup.get('confirmPassword').hasError('missMatch') ? 'Password do not match' : '';
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formGroup.valid) {
            this.loading = true;
            this.service.makeAPICall(this.service.postMethod, this.service.registerAPI, this.formGroup.value, function (response) {
                _this.loading = false;
                if (response.code !== 0) {
                    if (response.code === 200) {
                        localStorage.setItem('authToken', response.authToken);
                        localStorage.setItem('userInfo', JSON.stringify(response.data));
                        _this.router.navigate(['dashboard']);
                    }
                    else {
                        _environments_config__WEBPACK_IMPORTED_MODULE_6__["flash"](_this.snackBar, response.message);
                    }
                }
                else {
                    _environments_config__WEBPACK_IMPORTED_MODULE_6__["flash"](_this.snackBar, 'Something went wrong!');
                }
            });
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["Service"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")).default]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map