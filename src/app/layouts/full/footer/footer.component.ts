import { Component, OnInit } from '@angular/core';
import * as config from '../../../../environments/config';

@Component({
    selector: 'app-footer',
    template: `
    <div style= "bottom:0;width: 99.1%; left: 0;height: auto !important; position: fixed; z-index: 99;">
        <div style="text-align: center;background: #eeee;padding: 10px;color: #000; font-size:0.7rem">
            Powered By <a  href="{{config.companyURL}}" target="_blank">{{config.companyName}}</a>
        </div>
    <div>`,
})
export class FooterComponent {
    public data;
    public config = config;

    constructor() { }
}
