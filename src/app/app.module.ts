import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import { MainlayoutComponent } from './componants/mainlayout/mainlayout.component';
import { Notfound404Component } from './componants/notfound404/notfound404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
Notfound404Component,
    FooterComponent,
    MainlayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
