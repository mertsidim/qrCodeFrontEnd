import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
// import { MenuItems } from '../../../shared/menu-items/menu-items';
import { Service } from '../../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '../../../../environments/config';
import { Router } from '@angular/router';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class AppSidebarComponent implements OnDestroy, OnInit {
    mobileQuery: MediaQueryList;
    private mobileQueryListener: () => void;
    formDetails: any = {};
    errors: any = {};
    model: any = {};
    isEditMode: 0;
    public config: any;
    menuItemsList: any;
    superAdminFlag = false;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        // public menuItems: MenuItems,
        public service: Service,
        public snackBar: MatSnackBar,
        public route: Router) {
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addEventListener('change', this.mobileQueryListener);
        this.isEditMode = 0;
        this.config = config;
    }
    ngOnInit() {
    }
    ngOnDestroy(): void {
        this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    }

    editName(val: any) {
        this.isEditMode = val;
    }
}
