import * as moment from 'moment-timezone';
import { AES } from 'crypto-ts';

export const appName = 'Dinamik QR Kod Üreteci | Mert Şıdım';
export const companyURL = 'https://www.mertsidim.com.tr/';
export const companyName = 'Mert ŞIDIM';
export const logo = 'assets/qrkodureteci-logo.png';
export const favicon = 'assets/images/favicon.png';

/* export const baseUrl = 'http://localhost:4200'; */
/* export const apiBasePath = 'http://localhost/'; */



// **** Staging URL ****

// export const baseUrl = '';
// export const apiBasePath = '';

// **** Live URL ****

export const baseUrl = 'https://qrcodefrontend.azurewebsites.net';

export const apiBasePath = 'https://qrcodegenapi.azurewebsites.net/';

export const imagePath = apiBasePath + 'settings/';
export const pagination = [5, 10, 25, 100];
export const pageSize = 10;
export const secretKey = 'QR@123$';
export const urlReg: RegExp = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&\'\(\)\*\+,;=.]+$/;
export const telReg: RegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;
export const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function flash(snak: any, message: any, action = 'X') {
  snak.open(message, action, {
    duration: 5000,
    verticalPosition: 'top'
  });
}

export function encryptString(s: any, secret = null) {
  return AES.encrypt(s, secret ? secret : secretKey).toString();
}

export function date(dt: any) {
  return moment(dt)
    .local();
}
