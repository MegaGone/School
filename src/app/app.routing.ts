import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { RolesComponent } from './components/roles/roles.component';
import { DesarolloComponent } from './components/desarollo/desarollo.component';
import { LearnComponent } from './components/learn/learn.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'information', component: InformacionComponent },
  { path: 'desarrollo-web-roles', component: RolesComponent },
  { path: 'que-es-desarrollo-web', component: DesarolloComponent },
  { path: 'aprender-desarrollo-web', component: LearnComponent},
  { path: 'coments', component: LogInComponent },
  { path: 'contact', component: ContactoComponent },
  { path: '**', component: ErrorComponent }
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);