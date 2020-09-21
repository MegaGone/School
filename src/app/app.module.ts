import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, AppRoutingProviders } from './app.routing';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RolesComponent } from './components/roles/roles.component';
import { DesarolloComponent } from './components/desarollo/desarollo.component';
import { LearnComponent } from './components/learn/learn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformacionComponent,
    LogInComponent,
    ContactoComponent,
    ErrorComponent,
    RolesComponent,
    DesarolloComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
