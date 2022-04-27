import { Screen2Component } from './screen2/screen2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen3Component } from './screen3/screen3.component';
import { Screen4Component } from './screen4/screen4.component';
import { Screen5Component } from './screen5/screen5.component';
import { Screen6Component } from './screen6/screen6.component';
import { Screen8Component } from './screen8/screen8.component';
import { Screen7Component } from './screen7/screen7.component';
import { Screen9Component } from './screen9/screen9.component';

const routes: Routes = [
  { path: '', redirectTo: 'screen1', pathMatch: 'full' },
  { path: 'screen1', component: Screen1Component },
  { path: 'screen2', component: Screen2Component },
  { path: 'screen3', component: Screen3Component },
  { path: 'screen4', component: Screen4Component },
  { path: 'screen5', component: Screen5Component },
  { path: 'screen6', component: Screen6Component },
  { path: 'screen7', component: Screen7Component },
  { path: 'screen8', component: Screen8Component },
  { path: 'screen9', component: Screen9Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
