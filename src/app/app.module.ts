// Angular core modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// App routing and severices
import { AppRoutingModule } from './app-routing.module';
import { Service } from './services/api.service';

// App layout
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { FooterComponent } from './layouts/full/footer/footer.component';
import { SpinnerComponent } from './shared/spinner.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';

// App components
import { AppComponent } from './app.component';
import { ConfigQRComponent } from './shared/qrConfig/qrConfig.component';
import { SettingsComponent } from './shared/settings/settings.component';

// QR-code module
import { SharedModule } from './shared/shared.module';
import { CheckRoutes } from './shared/middleware/check-routes';

import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    FooterComponent,
    ConfigQRComponent,
    SettingsComponent
  ],
  entryComponents: [
    ConfigQRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7261745144366382',
      adSlot: 7405605047,
    })
  ],
  providers: [Service, CheckRoutes],
  bootstrap: [AppComponent]
})
export class AppModule { }
