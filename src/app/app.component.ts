import { Component, ViewChild } from '@angular/core';
import { OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnDestroy {
  ngOnDestroy(): void {
  }
}