import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BikeService} from "./services/bike.service";

import {HttpClientModule} from "@angular/common/http";
import {AdminComponent} from "./components/admin/admin.component";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
