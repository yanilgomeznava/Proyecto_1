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
<<<<<<< HEAD
import { EscuelaComponent } from './escuela/escuela.component';
import { EscuelaListComponent } from './escuela-list/escuela-list.component';
import { EscuelaDetalleComponent } from './escuela-detalle/escuela-detalle.component';
=======
//import { EscuelaComponent } from './escuela/escuela.component';
import { MateriaComponent } from './materia/materia.component';
import { MateriaDetalleComponent } from './materia-detalle/materia-detalle.component';
import { MateriaListComponent } from './materia-list/materia-list.component';
>>>>>>> 7fa16a12361133e9f88f1b6eaa6b1022aca2d1d4


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniversidadComponent,
    UniversidadListComponent,
    UniversidadDetalleComponent,
<<<<<<< HEAD
    EscuelaComponent,
    EscuelaListComponent,
    EscuelaDetalleComponent
=======
    //EscuelaComponent,
    MateriaComponent,
    MateriaDetalleComponent,
    MateriaListComponent
>>>>>>> 7fa16a12361133e9f88f1b6eaa6b1022aca2d1d4
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
