import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from './panel/panel.module';




@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
