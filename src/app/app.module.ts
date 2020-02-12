import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';
import { MockApiService } from './shared/services/mock-api.service';
import { environment } from '../environments/environment';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    { provide: ApiService, useClass: environment.production ? ApiService : MockApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
