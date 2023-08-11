import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog()
  {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog Closed');
    });
  }

}
