import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as config from '../../environments/config';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class Service implements OnDestroy {
    URL = config.apiBasePath;
    url = '';
    postMethod = 'POST';
    getMethod = 'GET';
    headerdata: any;
    error = '';
    loginAPI = 'userLogin';
    registerAPI = 'userRegister';
    forgotPasswordAPI = 'forgotPassword';
    changePasswordAPI = 'api/changePassword';
    updateUser = 'api/updateUser';
    resetPasswordAPI = 'resetPassword';
    createEditDynamicURL = 'api/createEditDynamicURL';
    getUserQRCodes = 'api/getUserQRCodes';
    getQRCodeByID = 'api/getQRCodeByID';
    getQRCodeAnalyticsByID = 'api/getQRCodeAnalyticsByID';
    deleteQRCodeByID = 'api/deleteQRCodeByID';
    redirectURL = 'redirectURL';
    appSettings = 'appSettings';

    private errorMessage = 'Page Not Found !';

    private onSubject = new Subject<{ key: string, value: any }>();
    public changes = this.onSubject.asObservable().pipe(share());

    constructor(private UserServiceHttp: HttpClient, public route: Router) {
        this.start();
    }
    ngOnDestroy(): void {
        this.stop();
    }

    makeAPICall(methodName: any, url: any, params: any, callback: (response: any) => void) {
        if (this.getLocalStorage('authToken')) {
            this.headerdata = { headers: new HttpHeaders({ 'Content-Type': 'application/json', token: this.getLocalStorage('authToken') }) };
        } else {
            this.headerdata = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        }
        this.url = this.URL + url;
        if (methodName === this.postMethod) {
            return this.UserServiceHttp.post(this.url, params, this.headerdata)
                .subscribe(
                    (response: any) => {
                        if (response.status === 'err' && response.code === 403) {
                            this.clearLocalStorage('userInfo');
                            this.clearLocalStorage('authToken');
                            this.route.navigate(['auth']);
                        } else {
                            callback(response);
                        }
                    },
                    error => {
                        this.error = error;
                    }
                );
        }
        if (methodName === this.getMethod) {
            this.url = this.url + '?' + params;
            return this.UserServiceHttp.get(this.url, this.headerdata)
                .subscribe(
                    (response: any) => {
                        if (response.status === 'err' && response.code === 403) {
                            this.clearLocalStorage('userInfo');
                            this.clearLocalStorage('authToken');
                            this.route.navigate(['auth']);
                        } else {
                            callback(response);
                        }
                    },
                    error => {
                        this.error = error;
                    }
                );
        }
    }

    setErrorMessage(errorMessage: string) {
        this.errorMessage = errorMessage ? errorMessage : 'Page Not Found !';
    }

    getErrorMessage() {
        return this.errorMessage;
    }

    public getLocalStorage(key: string) {
        if (!localStorage.getItem(key)) {
            return null;
        }
        return localStorage.getItem(key);
    }

    public clearLocalStorage(key: string = null) {
        if (!!key) {
            localStorage.removeItem(key);
            // the local application doesn't seem to catch changes to localStorage...
            this.onSubject.next({ key, value: null });
        } else {
            localStorage.clear();
        }
    }


    private start(): void {
        window.addEventListener('storage', this.storageEventListener.bind(this));
    }

    private storageEventListener(event: StorageEvent) {
        if (event.storageArea === localStorage) {
            let v: string;
            try { v = JSON.parse(event.newValue); } catch (e) { v = event.newValue; }
            this.onSubject.next({ key: event.key, value: v });
        }
    }

    private stop(): void {
        window.removeEventListener('storage', this.storageEventListener.bind(this));
        this.onSubject.complete();
    }
}
