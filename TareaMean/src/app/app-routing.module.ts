import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { EscuelaComponent } from './escuela/escuela.component';
import { UniversidadComponent } from "./universidad/universidad.component";
<<<<<<< Updated upstream
=======
//import { MateriaComponent } from "./materia/materia.component";
>>>>>>> Stashed changes

const routes: Routes = [

  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'escuela', component: EscuelaComponent},
<<<<<<< Updated upstream
  {path: 'universidades', component: UniversidadComponent}
=======
  {path: 'universidades', component: UniversidadComponent},
  //{path: 'materias', component: MateriaComponent},
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
