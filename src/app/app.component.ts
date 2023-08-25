import { Component } from '@angular/core';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog'
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPortfolio';
  Apptheme !: string;
  isDarkMode !: boolean;

  constructor(/*public dialog: MatDialog,
    private themeService: ThemeService*/)
  {
    // this.subscription = this.themeService.getTheme().subscribe(x => {
    //   this.isDarkMode = x;
    // })
  }

  ngOnInit()
  {
    if(localStorage.getItem('user_theme') === 'dark_mode')
    {
      this.isDarkMode = true;
    } else this.isDarkMode = false;
  }

  GetData(theme: boolean)
  {
    this.isDarkMode = theme;
    const appBodyTag = document.getElementsByTagName('body')[0];
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

  // openDialog()
  // {
  //   const dialogRef = this.dialog.open(DialogComponent);
  //   dialogRef.afterClosed().subscribe(() => {
  //   });
  // }

}