import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputinfoComponent } from './inputinfo/inputinfo.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './display/display.component';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    InputinfoComponent,
    DisplayComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }