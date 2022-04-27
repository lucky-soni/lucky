import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {
  toggleSubmenu=true;
  constructor(@Inject(MAT_DIALOG_DATA) public mode: any,public dialog:MatDialog) { }

  ngOnInit(): void {
    console.log(this.mode)
  }

  close () {
  this.dialog.closeAll()
  }

}
