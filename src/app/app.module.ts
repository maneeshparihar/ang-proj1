import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { QuesBankService } from './ques-bank.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StickyModule } from 'ng2-sticky-kit';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { Testc1Component } from './testc1/testc1.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { QBankComponent } from './q-bank/q-bank.component';
import { TestpaperComponent } from './testpaper/testpaper.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    Testc1Component,
    Navbar1Component,
    QBankComponent,
    TestpaperComponent,
    ResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, MDBBootstrapModule.forRoot(),
    FormsModule, BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    StickyModule,
    HttpModule

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [QuesBankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
