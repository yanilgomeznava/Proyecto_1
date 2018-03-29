import { Component, OnInit, EventEmitter } from '@angular/core';
import { Estudiante } from './../estudiante';


@Component({
  selector: 'estudiante-detalle',
  templateUrl: './estudiante-detalle.component.html',
  styleUrls: ['./estudiante-detalle.component.css'],
  inputs: ['estudiante'],
  outputs : ['updateEstudianteEvent', 'deleteEstudianteEvent']
})
export class EstudianteDetalleComponent implements OnInit {
    estudiante: any;
	
  private editNombre: boolean = false;
  private updateEstudianteEvent = new EventEmitter();
  private deleteEstudianteEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  this.editNombre=false;
  }

  onNombreClick(){
  this.editNombre=true;
  }

  updateEstudiante(){
    this.updateEstudianteEvent.emit(this.estudiante);
  }

  deleteEstudiante(){
  this.deleteEstudianteEvent.emit(this.estudiante);
}


}