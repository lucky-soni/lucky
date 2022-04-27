import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';

@Component({
  selector: 'app-screen5',
  templateUrl: './screen5.component.html',
  styleUrls: ['./screen5.component.scss'],
})
export class Screen5Component implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(mode: any) {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      data: mode,
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '48%',
      width: '100%',
      panelClass: 'full-screen-modal-2',
    });
  }
}
