import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniversidadComponent } from './universidad/universidad.component';
import { UniversidadListComponent } from './universidad-list/universidad-list.component';
import { UniversidadDetalleComponent } from './universidad-detalle/universidad-detalle.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { EscuelaListComponent } from './escuela-list/escuela-list.component';
import { EscuelaDetalleComponent } from './escuela-detalle/escuela-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniversidadComponent,
    UniversidadListComponent,
    UniversidadDetalleComponent,
    EscuelaComponent,
    EscuelaListComponent,
    EscuelaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
