import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { EscuelaComponent } from './escuela/escuela.component';
import { UniversidadComponent } from "./universidad/universidad.component";
<<<<<<< HEAD
=======
import { MateriaComponent } from "./materia/materia.component";

>>>>>>> 7fa16a12361133e9f88f1b6eaa6b1022aca2d1d4

const routes: Routes = [

  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
<<<<<<< HEAD
  {path: 'escuelas', component: EscuelaComponent},
  {path: 'universidades', component: UniversidadComponent}
=======
  {path: 'escuela', component: EscuelaComponent},
  {path: 'universidades', component: UniversidadComponent},
  {path: 'materias', component: MateriaComponent},

>>>>>>> 7fa16a12361133e9f88f1b6eaa6b1022aca2d1d4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
