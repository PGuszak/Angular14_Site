import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//My imports
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//see about downloading fontawesome
import { ResourceNavbarComponent } from './resource-navbar/resource-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const appRoutes: Routes = [
  {path: '', redirectTo: "/SignIn",pathMatch:'full' },
  {path: 'SignIn', component: SigninComponent},
  {path: 'SignUp', component: SignupComponent},
  {path: 'MainPage', component: MainpageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ResourceNavbarComponent,
    SigninComponent,
    SignupComponent
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
