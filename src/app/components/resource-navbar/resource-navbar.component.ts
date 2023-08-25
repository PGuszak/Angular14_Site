import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-resource-navbar',
  templateUrl: './resource-navbar.component.html',
  styleUrls: ['./resource-navbar.component.scss']
})
export class ResourceNavbarComponent implements OnInit {

  @Output() updateTheme = new EventEmitter <any> ();
  isDarkMode !: boolean;
  subscription: Subscription;

  
  constructor(private themeService: ThemeService)
  {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
    this.subscription = this.themeService.getTheme().subscribe(x => {
      this.isDarkMode = x;
    })
  }

  ngOnInit(): void 
  {

  }

  toggleDarkMode()
  {
    this.isDarkMode = this.themeService.isDarkMode();
    //same as a if elses switch to 'this_mode' just better one liner
    this.isDarkMode ? this.themeService.update('light_mode') : this.themeService.update('dark_mode');
    this.PostThemetoApp();
  }

  PostThemetoApp()
  {
    this.updateTheme.emit(this.themeService.isDarkMode());
    const MatToolBarTag = document.getElementsByTagName('mat-toolbar')[0];    
    this.themeService.sendData(this.isDarkMode);
    if(!this.isDarkMode)
    {
      MatToolBarTag.classList.remove('lightNav');
      MatToolBarTag.classList.add('darkNav');
    }
    if(this.isDarkMode)
    {
      MatToolBarTag.classList.remove('darkNav');
      MatToolBarTag.classList.add('lightNav');
    }
  }

  

}
