import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../../services/theme.service';


@Component({
  selector: 'app-resource-navbar',
  templateUrl: './resource-navbar.component.html',
  styleUrls: ['./resource-navbar.component.scss']
})
export class ResourceNavbarComponent implements OnInit {

  @Output() updateTheme = new EventEmitter <any> ();
  isDarkMode !: boolean;
  
  constructor(private themeService: ThemeService)
  {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
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
  }

  

}
