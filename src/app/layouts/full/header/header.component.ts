import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  // private user: any;
  showProfile = false;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public service: Service) {
    if (this.service.getLocalStorage('authToken')) {
      this.showProfile = true;
    }
  }

  logout() {
    this.service.clearLocalStorage('userInfo');
    this.service.clearLocalStorage('authToken');
    this.router.navigate(['auth/login']);
  }
  // editProfile() {
  //   this.router.navigate(['/edit-profile']);
  // }
}
