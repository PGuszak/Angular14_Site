import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//My imports
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//see about downloading fontawesome
import { ResourceNavbarComponent } from './components/resource-navbar/resource-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';


const appRoutes: Routes = [
  {path: '', redirectTo: "/MainPage",pathMatch:'full' },
  {path: 'MainPage', component: MainpageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ResourceNavbarComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
