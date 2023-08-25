import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  //will in reality always be a string but TS is stupid and using 'any' was 
  // the only was to get errors to go
  private colorTheme !: any;
  private subject = new Subject<any>();

  
  constructor(rendererFactory: RendererFactory2) 
  {
    this.renderer = rendererFactory.createRenderer(null, null);
  }


  update(theme: 'dark_mode' | 'light_mode')
  {
    this.setColorTheme(theme)

    //css class - 
    const previousColorTheme = (theme === 'dark_mode' ? 'light_mode' : 'dark_mode');
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }

  initTheme()
  {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  isDarkMode()
  {
    return this.colorTheme === 'dark_mode';
  }

  //helper functions for theme
  private setColorTheme(theme:string)
  {
    this.colorTheme = theme;
    /*
    sets in memory if the browser is closed allows the 
    theme the user set to persist in other sessions and uses
    */
    localStorage.setItem('user_theme', theme);
  }

  private getColorTheme()
  {
    if(localStorage.getItem('user_theme'))
    {
      this.colorTheme = localStorage.getItem('user_theme');
    }
    else
    {
      this.colorTheme = 'light_mode';
    }
  }


  //send the theme through the app and into the router-outlet
  getTheme(): Observable<any>
  {
    return this.subject.asObservable();
  }

  sendData(message: boolean) {
    this.subject.next(message);
}
}
