import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//My imports
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Mat imports
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';



//see about downloading fontawesome
import { ResourceNavbarComponent } from './components/resource-navbar/resource-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatListModule } from '@angular/material/list';

const appRoutes: Routes = [
  {path: '', redirectTo: "/MainPage",pathMatch:'full' },
  {path: 'MainPage', component: MainpageComponent},
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
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
