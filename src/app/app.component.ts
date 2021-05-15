import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as config from '@environments/config';
import { Service } from './services/api.service';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    title = 'Make your own custom QR codes.';
    data: any = [];
    constructor(
        private service: Service,
        private _router: Router
    ) {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                gtag('config', 'UA-161826011-1',
                    {
                        page_path: `${config.baseUrl}${event.urlAfterRedirects}`
                    }
                );
            }
        });

    }

    ngOnInit(): void {
        this.service.makeAPICall(this.service.postMethod, this.service.appSettings, { imagesArray: ['logo.png', 'favicon.png'], flag: 0 }, (response) => {
            if (response.code !== 0) {
                if (response.code === 200) {
                    if (response.data) {
                        this.data = response.data;
                        localStorage.setItem('settings', JSON.stringify(response.data));
                    }
                }
            }
        });
    }

    ngAfterViewInit(): void {
        if (this.data) {
            this.data.forEach((element: { name: string; status: boolean; }) => {
                if (element.name === 'favicon.png' && element.status === true) {
                    document.getElementById('fav').setAttribute('href', `${config.imagePath}favicon.png`);
                }
            });
        }

    }
}
