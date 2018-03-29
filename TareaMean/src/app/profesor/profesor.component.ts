import { ProfesorService } from './../profesor.service';
import { Profesor } from './../profesor';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
  providers: [ProfesorService]
})
export class ProfesorComponent implements OnInit {


profesores: Array<Profesor>;

  selectedProfesor: Profesor;
  private hidenewProfesor: boolean = true;

  constructor(private _profesorService: ProfesorService) { }

  ngOnInit() {
    this._profesorService.getProfesores()
      .subscribe(resProfesorData => this.profesores = resProfesorData )
  }

  onSelectProfesor(profesor: any){
  this.selectedProfesor = profesor;
  this.hidenewProfesor = true;
  console.log(this.selectedProfesor);
  }


  onSubmitAddProfesor(profesor: Profesor) {
  this._profesorService.addProfesor(profesor)
    .subscribe(resNewProfesor => {
      this.profesores.push(resNewProfesor);
      this.hidenewProfesor = true;
      this.selectedProfesor = resNewProfesor;
    });

}

  onUpdateProfesorEvent(profesor: any) {
    this._profesorService.updateProfesor(profesor)
      .subscribe(resUpdatedProfesor => profesor = resUpdatedProfesor);
    this.selectedProfesor = null;
  };


  onDeleteProfesorEvent(profesor: any) {
  let profesorArray = this.profesores;
  this._profesorService.deleteProfesor(profesor)
    .subscribe(resDeletedProfesor => {
      for (let i = 0; i < profesorArray.length; i++) {
        if (profesorArray[i]._id === profesor._id) {
          profesorArray.splice(i, 1);
        }
      }
    });
  this.selectedProfesor = null;
};

newProfesor(){
  this.hidenewProfesor = false; 
}
}