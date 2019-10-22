import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxOcticonsModule } from 'ngx-octicons';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxOcticonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
