import { CanActivate, Router, ActivatedRoute, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { Service } from 'src/app/services/api.service';
@Injectable()
export class CheckRoutes implements CanActivate, CanLoad {
    constructor(public route: Router, public activatedRouter: ActivatedRoute, public service: Service) { }

    canLoad(): boolean {
        if (!this.service.getLocalStorage('authToken')) {
            this.route.navigate(['auth']);
            return false;
        }
        return true;
    }
    canActivate(): boolean {
        if (!this.service.getLocalStorage('authToken')) {
            this.route.navigate(['auth']);
            return false;
        }
        return true;
    }
}
