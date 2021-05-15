import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-config',
    templateUrl: './qrConfig.component.html',
    styleUrls: ['./qrConfig.component.scss']
})
export class ConfigQRComponent implements OnInit {

    formGroup: FormGroup = this.formBuilder.group({
        width: undefined,
        height: undefined,
        quietZone: undefined,
        colorDark: undefined,
        colorLight: undefined,
        logo: undefined,
        logoWidth: undefined,
        logoHeight: undefined,
        logoBackgroundTransparent: undefined,
        logoBackgroundColor: undefined,
        backgroundImage: undefined,
        backgroundImageAlpha: undefined,
        autoColor: undefined,
        title: undefined,
        // titleFont: undefined,
        titleColor: undefined,
        titleBackgroundColor: undefined,
        titleHeight: undefined,
        subTitle: undefined,
        // subTitleFont: undefined,
        subTitleColor: undefined
    });

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ConfigQRComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) { }

    ngOnInit(): void {
        delete this.data.text;
        this.formGroup.setValue(this.data);
    }
    onImagePicked(event: HTMLInputElement, flag = 0) {
        const file = (event as HTMLInputElement).files[0];
        const reader = new FileReader();
        reader.onload = () => {
            if (flag === 0) {
                this.formGroup.patchValue({
                    logo: reader.result
                });
            } else {
                this.formGroup.patchValue({
                    backgroundImage: reader.result
                });
            }
        };
        reader.readAsDataURL(file);
        event.value = '';
    }

    deletefile(flag = 0) {
        if (flag === 0) {
            this.formGroup.patchValue({
                logo: null
            });
        } else {
            this.formGroup.patchValue({
                backgroundImage: null
            });
        }
    }

    onSubmit(val = null) {
        if (!val) {
            this.dialogRef.close();
        } else {
            this.dialogRef.close(val);
        }
    }

}
