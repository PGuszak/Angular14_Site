import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//My imports
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Mat imports
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

//component imports 
import { ResourceNavbarComponent } from './components/resource-navbar/resource-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { LayoutModule } from '@angular/cdk/layout';

//font awesome import


const appRoutes: Routes = [
  {path: '', redirectTo: "/MainPage",pathMatch:'full' },
  {path: 'MainPage', component: MainpageComponent},
  {path: 'About', component: AboutpageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ResourceNavbarComponent,
    MainpageComponent,
    FooterComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
