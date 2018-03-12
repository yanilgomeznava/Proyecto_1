import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { EscuelaComponent } from './escuela/escuela.component';
import { UniversidadComponent } from "./universidad/universidad.component";

const routes: Routes = [

  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'escuela', component: EscuelaComponent},
  {path: 'universidades', component: UniversidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
