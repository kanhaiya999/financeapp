import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetComponent } from './auth/reset/reset.component';
import { HomeComponent } from './home/home.component';
import { ManageExpencesComponent } from './home/manage-expences/manage-expences.component';
import { AddExpencesComponent } from './home/manage-expences/add-expences/add-expences.component';
import { AllExpencesComponent } from './home/manage-expences/all-expences/all-expences.component';
import { EditExpencesComponent } from './home/manage-expences/edit-expences/edit-expences.component';
import { ManageCatogeriesComponent } from './home/manage-catogeries/manage-catogeries.component';
import { AddCatogeriesComponent } from './home/manage-catogeries/add-catogeries/add-catogeries.component';
import { AllCatogeriesComponent } from './home/manage-catogeries/all-catogeries/all-catogeries.component';
import { ExpencesSummaryComponent } from './home/expences-summary/expences-summary.component';
import { ShareComponent } from './share/share.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { FooterComponent } from './share/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ResetComponent,
    HomeComponent,
    ManageExpencesComponent,
    AddExpencesComponent,
    AllExpencesComponent,
    EditExpencesComponent,
    ManageCatogeriesComponent,
    AddCatogeriesComponent,
    AllCatogeriesComponent,
    ExpencesSummaryComponent,
    ShareComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
