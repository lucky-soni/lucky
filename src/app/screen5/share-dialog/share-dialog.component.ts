import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CopyDialogComponent } from '../copy-dialog/copy-dialog.component';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss'],
})
export class ShareDialogComponent implements OnInit {
  toggleSubmenu = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public mode: any,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log(this.mode);
  }

  close() {
    this.dialog.closeAll();
  }


  openInfoDialog() {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '80%',
      panelClass:'info-modal'
    });
  }
  openCopyDialog() {
    const dialogRef = this.dialog.open(CopyDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '80%',
      panelClass:'info-modal'
    });
  }


}
