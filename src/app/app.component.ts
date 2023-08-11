import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPortfolio';
  Apptheme !: string;
  isDarkMode !: boolean;

  constructor(public dialog: MatDialog)
  {
   
  }

  GetData(theme: boolean)
  {
    console.log(theme);
    this.isDarkMode = theme;
    const appBodyTag = document.getElementsByTagName('body')[0];
    console.log(appBodyTag);
    if(this.isDarkMode)
    {
      appBodyTag.classList.remove('light_mode');
      appBodyTag.classList.add('dark_mode');
    }
    if(!this.isDarkMode)
    {
      appBodyTag.classList.remove('dark_mode');
      appBodyTag.classList.add('light_mode');
    }
    
  }

  openDialog()
  {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog Closed');
    });
  }

}