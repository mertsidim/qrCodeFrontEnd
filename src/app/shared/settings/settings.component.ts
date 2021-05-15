import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Service } from 'src/app/services/api.service';
import * as config from '@environments/config';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    config = config;
    loading = false;
    isFavicon = false;
    isLogo: boolean;

    constructor(
        private service: Service,
        public snackBar: MatSnackBar

    ) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        const settings = JSON.parse(localStorage.getItem('settings'));
        settings.forEach((element: { name: string; status: boolean; }) => {
            if (element.name === 'logo.png' && element.status === true) {
                const img = document.getElementById('logo') as HTMLImageElement;
                img.setAttribute('src', `${config.imagePath}logo.png`);
                img.crossOrigin = 'anonymous';
                this.isLogo = true;
            } else if (element.name === 'favicon.png' && element.status === true) {
                const img = document.getElementById('favicon') as HTMLImageElement;
                img.setAttribute('src', `${config.imagePath}favicon.png`);
                img.crossOrigin = 'anonymous';
                this.isFavicon = true;
            }
        });

    }
    onImagePicked(event: HTMLInputElement, flag = 0) {
        const imageName = flag === 0 ? 'logo' : 'favicon';
        const file = (event as HTMLInputElement).files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const data = reader.result.toString().split(';');
            if (data[0] === 'data:image/png') {
                const img = document.getElementById(imageName) as HTMLImageElement;
                img.setAttribute('src', reader.result.toString());
                img.crossOrigin = 'anonymous';
                if (imageName === 'favicon') {
                    this.isFavicon = true;
                    document.getElementById('fav').setAttribute('href', reader.result.toString());
                } else {
                    this.isLogo = true;
                    document.getElementById('appLogo').setAttribute('src', reader.result.toString());
                }
                this.service.makeAPICall(this.service.postMethod,
                    this.service.appSettings, { imageName, image: reader.result.toString(), flag: 1 }, (response) => {
                        if (response.code !== 0) {
                            if (response.code !== 200) {
                                this.config.flash(this.snackBar, response.message);
                            } else {
                                this.config.flash(this.snackBar, response.message);
                            }
                        }
                    });
            } else {
                this.config.flash(this.snackBar, 'Please upload png file');
            }
        };
        reader.readAsDataURL(file);
        event.value = '';
    }

    deletefile(flag = 0) {
        if (flag === 0) {
            this.isLogo = false;
        } else {
            this.isFavicon = false;
        }
    }
}
