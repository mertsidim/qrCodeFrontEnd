import { MediaMatcher } from '@angular/cdk/layout';
import { Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as config from '../../../environments/config';
import { ChangeDetectorRef, Component, OnDestroy, AfterViewInit } from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: ['full.component.css'],
})
export class FullComponent implements OnDestroy, AfterViewInit, OnInit {
  mobileQuery: MediaQueryList;
  @Input() isSpinnerVisible = false;

  private mobileQueryListener: () => void;
  public config = config;
  constructor(changeDetectorRef: ChangeDetectorRef, public route: Router, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    this.config = config;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
  ngAfterViewInit(): void {
    const settings = JSON.parse(localStorage.getItem('settings'));
    if (settings) {
      settings.forEach((element: { name: string; status: boolean; }) => {
        if (element.name === 'logo.png' && element.status === true) {
          document.getElementById('appLogo').setAttribute('src', `${config.imagePath}logo.png`);
        }
      });
    }
  }

}
