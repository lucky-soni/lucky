import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.scss']
})
export class Screen3Component implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(mode:any) {
    const dialogRef = this.dialog.open(MenuDialogComponent,
      {
      data:mode,
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '70%',
      width: '100%',
      panelClass: 'full-screen-modal'
    } );
  }


}
