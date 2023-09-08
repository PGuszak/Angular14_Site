import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';
import { ThemeService } from 'src/app/services/theme.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  dataPassed: any;
  subscription: Subscription;

  constructor(private ThemeService: ThemeService) 
  {
    this.subscription = this.ThemeService.getTheme().subscribe(x => {                  this.dataPassed = x; 
    this.dataPassed = !x;
    });
  } 
  
  ngOnInit(): void 
  {

  }
  // openDialog()
  // {
  //   const dialogRef = this.dialog.open(DialogComponent);
  //   dialogRef.afterClosed().subscribe(() => {
  //   });
  // }

}
