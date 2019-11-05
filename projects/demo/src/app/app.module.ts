import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OcticonsModule } from 'ngx-octicons';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OcticonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
