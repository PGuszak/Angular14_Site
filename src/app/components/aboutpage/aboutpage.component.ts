import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { MatDrawer } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss']
})
export class AboutpageComponent implements OnInit {
  showFiller = false;
  isDarkMode: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  openDialog()
  {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
