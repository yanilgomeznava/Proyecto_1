import { Component, OnInit, EventEmitter } from '@angular/core';
import { Profesor } from './../profesor';


@Component({
  selector: 'profesor-detalle',
  templateUrl: './profesor-detalle.component.html',
  styleUrls: ['./profesor-detalle.component.css'],
  inputs: ['profesor'],
  outputs : ['updateProfesorEvent', 'deleteProfesorEvent']
})
export class ProfesorDetalleComponent implements OnInit {
    profesor: any;
	
  private editNombre: boolean = false;
  private updateProfesorEvent = new EventEmitter();
  private deleteProfesorEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  this.editNombre=false;
  }

  onNombreClick(){
  this.editNombre=true;
  }

  updateProfesor(){
    this.updateProfesorEvent.emit(this.profesor);
  }

  deleteProfesor(){
  this.deleteProfesorEvent.emit(this.profesor);
}


}