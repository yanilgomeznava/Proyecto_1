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
import { MateriaComponent } from './materia/materia.component';
import { MateriaDetalleComponent } from './materia-detalle/materia-detalle.component';
import { MateriaListComponent } from './materia-list/materia-list.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesorDetalleComponent } from './profesor-detalle/profesor-detalle.component';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudianteDetalleComponent } from './estudiante-detalle/estudiante-detalle.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { ForoComponent } from './foro/foro.component';
import { ForolistComponent } from './forolist/forolist.component';
import { ForodetalleComponent } from './forodetalle/forodetalle.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniversidadComponent,
    UniversidadListComponent,
    UniversidadDetalleComponent,

    EscuelaComponent,
    EscuelaListComponent,
    EscuelaDetalleComponent,
    MateriaComponent,
    MateriaDetalleComponent,
    MateriaListComponent,
    ProfesorComponent,
    ProfesorDetalleComponent,
    ProfesorListComponent,
    EstudianteComponent,
    EstudianteDetalleComponent,
    EstudianteListComponent,
    ForoComponent,
    ForolistComponent,
    ForodetalleComponent,

   
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
