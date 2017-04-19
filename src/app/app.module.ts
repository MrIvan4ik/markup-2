import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { Parallax, ParallaxConfig } from 'ng2-parallax/commonjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeamComponent } from './components/team/team.component';
import { MapComponent } from './components/map/map.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // Parallax,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    MapComponent,
    ClientsComponent,
    ClientListComponent,
    ContactsComponent,
    HamburgerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
