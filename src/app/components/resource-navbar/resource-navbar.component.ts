import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-resource-navbar',
  templateUrl: './resource-navbar.component.html',
  styleUrls: ['./resource-navbar.component.scss']
})
export class ResourceNavbarComponent implements OnInit {

  @Output() updateTheme = new EventEmitter <any> ();
  isDarkMode!: boolean;
  subscription: Subscription;
  isMenuOpen: boolean = false;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  
  constructor(private themeService: ThemeService,
              private breakpointObserver: BreakpointObserver)
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
  
  toggleMenu(): void 
  {
    const navLinks = document.querySelector(".nav-links");
    if(!this.isMenuOpen)
    {
      navLinks?.classList.add('mobile-menu');
    }
    else
    {
      navLinks?.classList.remove('mobile-menu');
    }
    this.isMenuOpen = !this.isMenuOpen


    const menuHambuger = document.querySelector('.menu-hamburger');
    // menuHambuger?.addEventListener('click', () =>
    // {
    //   navLinks?.classList.toggle('mobile-menu');
    // })
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
    // const MatToolBarTag = document.getElementsByTagName('mat-toolbar')[0];
    const ListID1 = document.getElementById('HomeLink');

    this.themeService.sendData(this.isDarkMode);
    if(!this.isDarkMode)
    {

    }
    if(this.isDarkMode)
    {
      
    }
  }

  

}
