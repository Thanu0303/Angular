import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { ContactHomeComponent } from './contacts/contact-home.component';
import { ContactListComponent } from './contacts/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details.component';
import { ContactCreateComponent } from './contacts/contact-create.component';
import { ContactUpdateComponent } from './contacts/contact-update.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/home.component';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "contacts", component:ContactHomeComponent},
  { path: "contacts/list", component:ContactListComponent},
   { path: "contacts/new", component:ContactCreateComponent},
   { path: "contacts/:id", component:ContactDetailsComponent},
   { path: "contacts/edit/:id", component:ContactUpdateComponent}, 
  {path: "login",component:LoginComponent },
  {path: "",redirectTo: "/login", pathMatch: "full"},
 
];

@NgModule({
  declarations: [
    AppComponent,
   ContactHomeComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactCreateComponent,
    ContactUpdateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
