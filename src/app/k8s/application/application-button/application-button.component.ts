import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ApplicationDialogComponent} from '../application-dialog/application-dialog.component';

@Component({
  selector: 'app-application-button',
  templateUrl: './application-button.component.html',
  styleUrls: ['./application-button.component.scss']
})
export class ApplicationButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(ApplicationDialogComponent, {
      height: '900px',
      width: '1400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`会话框状态：${result}`);
    });
  }

  ngOnInit() {
  }

}
