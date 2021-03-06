import { Component, OnInit, EventEmitter } from '@angular/core';
import { Escuela, programa, mallas } from './../escuela';
import { NgIf } from '@angular/common';

@Component({
  selector: 'escuela-detalle',
  templateUrl: './escuela-detalle.component.html',
  styleUrls: ['./escuela-detalle.component.css'],
  inputs: ['escuela', 'universidades'],
  outputs: ['updateEscuelaEvent', 'deleteEscuelaEvent']
})
export class EscuelaDetalleComponent implements OnInit {

  escuela: any;
  universidades: any;
  universidad: any;
  programaSeleccionado: programa;
  programaSeleccionadoNombre: String;
  mallaSeleccionadoNombre : String;

  private editNombre: boolean = false;
  private updateEscuelaEvent = new EventEmitter();
  private deleteEscuelaEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // LLAMAR LA UNIVERSIDAD ESPECIFICA DE LA ESCUELA
    for (let u of this.universidades) {
      
      if (u._id == this.escuela.universidad) {
        this.universidad = u;
        break;
      }
    }

    this.programaSeleccionado = this.escuela.programa[0];

    if (this.programaSeleccionado) {
      this.programaSeleccionadoNombre = this.programaSeleccionado.nombrePrograma;
    }

  }

  ngOnChanges() {

    this.editNombre = false;
  }

  onNombreClick() {
    this.editNombre = true;
  }

  updateEscuela() {
    this.updateEscuelaEvent.emit(this.escuela);
  }

  deleteEscuela() {
    this.deleteEscuelaEvent.emit(this.escuela);
  }

  //AGREGA UNA NUEVA CARRERA, a una carrera con su respectiva escuela
  onAgregarNuevoPrograma(programa: programa) {
    programa.mallas = [];
    this.escuela.programa.push(programa);
    console.log(this.escuela.programa);
  };

  //ELIMINAR PROGRAMA, segun la escuela y carrera seleccionada. por medio de un for realiza las referencias
  deletePrograma() {
    var p: any;
    for (p in this.escuela.programa) {
      if (this.escuela.programa[p].nombrePrograma === this.programaSeleccionado.nombrePrograma) {
        this.escuela.programa.splice(p, 1);
      }
    }
  };

  //BORRAR MALLA
  deleteMalla(value) {
    var p: any;
    for (p in this.programaSeleccionado.mallas) {
      if (this.programaSeleccionado.mallas[p].nombreMalla === this.mallaSeleccionadoNombre) {
        this.programaSeleccionado.mallas.splice(p, 1);
      }
    }
  };

  //AGREGAR NUEVA MALLA, busca segun la carrera y la escuela seleccionada

  onAgregarNuevaMalla(malla: any) {
    this.programaSeleccionado.mallas.push(malla);
    var p: any;
    for (p in this.escuela.programa) {
      if (this.escuela.programa[p].nombrePrograma === this.programaSeleccionado.nombrePrograma) {
        this.escuela.programa[p] = this.programaSeleccionado;
      }
    }
  };

  onDropdown(u: any) {
    this.escuela.universidad = u;
  };

  //CAMBIAR DE CARRERA SELECCIONADA
  onChangePrograma(newValue) {
    var p: any;
    for (p in this.escuela.programa) {
      if (this.escuela.programa[p].nombrePrograma === newValue) {
        this.programaSeleccionado = this.escuela.programa[p];
      }
    }
  }

}


