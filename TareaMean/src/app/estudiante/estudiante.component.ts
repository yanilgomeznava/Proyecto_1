import { EstudianteService } from './../estudiante.service';
import { Estudiante } from './../estudiante';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
  providers: [EstudianteService]
})
export class EstudianteComponent implements OnInit {


estudiantes: Array<Estudiante>;

  selectedEstudiante: Estudiante;
  private hidenewEstudiante: boolean = true;

  constructor(private _estudianteService: EstudianteService) { }

  ngOnInit() {
    this._estudianteService.getEstudiantes()
      .subscribe(resEstudianteData => this.estudiantes = resEstudianteData )
  }

  onSelectEstudiante(estudiante: any){
  this.selectedEstudiante = estudiante;
  this.hidenewEstudiante = true;
  console.log(this.selectedEstudiante);
  }


  onSubmitAddEstudiante(estudiante: Estudiante) {
  this._estudianteService.addEstudiante(estudiante)
    .subscribe(resNewEstudiante => {
      this.estudiantes.push(resNewEstudiante);
      this.hidenewEstudiante = true;
      this.selectedEstudiante = resNewEstudiante;
    });

}

  onUpdateEstudianteEvent(estudiante: any) {
    this._estudianteService.updateEstudiante(estudiante)
      .subscribe(resUpdatedEstudiante => estudiante = resUpdatedEstudiante);
    this.selectedEstudiante = null;
  };


  onDeleteEstudianteEvent(estudiante: any) {
  let estudianteArray = this.estudiantes;
  this._estudianteService.deleteEstudiante(estudiante)
    .subscribe(resDeletedEstudiante => {
      for (let i = 0; i < estudianteArray.length; i++) {
        if (estudianteArray[i]._id === estudiante._id) {
          estudianteArray.splice(i, 1);
        }
      }
    });
  this.selectedEstudiante = null;
};

newEstudiante(){
  this.hidenewEstudiante = false; 
}
}
