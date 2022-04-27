import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-ui.module';
import { Screen1Component } from './screen1/screen1.component';
import { FooterComponent } from './screen1/footer/footer.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { MenuDialogComponent } from './screen3/menu-dialog/menu-dialog.component';
import { Screen4Component } from './screen4/screen4.component';
import { Screen5Component } from './screen5/screen5.component';
import { Screen6Component } from './screen6/screen6.component';
import { ShareDialogComponent } from './screen5/share-dialog/share-dialog.component';
import { InfoDialogComponent } from './screen5/info-dialog/info-dialog.component';
import { CopyDialogComponent } from './screen5/copy-dialog/copy-dialog.component';
import { Screen7Component } from './screen7/screen7.component';
import { Screen8Component } from './screen8/screen8.component';
import { Screen9Component } from './screen9/screen9.component';
@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    FooterComponent,
    Screen3Component,
    MenuDialogComponent,
    Screen4Component,
    Screen5Component,
    ShareDialogComponent,
    Screen6Component,
    InfoDialogComponent,
    CopyDialogComponent,
    Screen7Component,
    Screen8Component,
    Screen9Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
