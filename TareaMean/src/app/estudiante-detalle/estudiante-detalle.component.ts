import { Component, OnInit, EventEmitter } from '@angular/core';
import { Estudiante  } from './../estudiante';
import { NgIf } from '@angular/common';

@Component({
  selector: 'estudiante-detalle',
  templateUrl: './estudiante-detalle.component.html',
  styleUrls: ['./estudiante-detalle.component.css'],
  inputs: ['estudiante', 'universidades'],
  outputs: ['updateEstudianteEvent', 'deleteEstudianteEvent']
})
export class EstudianteDetalleComponent implements OnInit {

  estudiante: any;
  universidades: any;
  universidad: any;
  

  private editNombre: boolean = false;
  private updateEstudianteEvent = new EventEmitter();
  private deleteEstudianteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    for (let u of this.universidades) {
      if (u._id == this.estudiante.universidad) {
        this.universidad = u;
        break;
      }
    }

  }

  ngOnChanges() {

    this.editNombre = false;
  }

  onNombreClick() {
    this.editNombre = true;
  }

  updateEstudiante() {
    this.updateEstudianteEvent.emit(this.estudiante);
  }

  deleteEstudiante() {
    this.deleteEstudianteEvent.emit(this.estudiante);
  }


  onDropdown(u: any) {
    this.estudiante.universidad = u;
  };


}


