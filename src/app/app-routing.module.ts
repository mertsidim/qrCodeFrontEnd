import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components for routing
import { FullComponent } from './layouts/full/full.component';
import { PageNotFoundComponent } from './shared/page-not-found';
import { SettingsComponent } from './shared/settings/settings.component';
import { CheckRoutes } from './shared/middleware/check-routes';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '', loadChildren: () => import('./static-qr/static-qr.module').then(m => m.StaticQRModule)
      },
      {
        path: 'dashboard',
        canActivate: [CheckRoutes],
        canLoad: [CheckRoutes],
        loadChildren: () => import('./dynamic-qr/dynamic-qr.module').then(m => m.DynamicQRModule)
      },
      {
        path: 'settings',
        canActivate: [CheckRoutes],
        canLoad: [CheckRoutes],
        component: SettingsComponent
      }
    ]
  },
  {
    path: 'redirectQR', loadChildren: () => import('./redirect-qr/redirect-qr.module').then(m => m.RedirectQRModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
