import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent2Component } from './test.component2/test.component2.component';
import { HeaderComponent } from './component-test/header/header.component';

import { AboutComponent } from './component-test/about/about.component';
import { ContactComponent } from './component-test/contact/contact.component';
import { FooterComponent } from './component-test/footer/footer.component';
import { ConfirmDialogComponent } from './component-test/confirm-dialog/confirm-dialog.component';
import { ModalHomeComponent } from './component-test/home/modal.home/modal.home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent2Component,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ConfirmDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
