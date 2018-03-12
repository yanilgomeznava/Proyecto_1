import { Component, OnInit, EventEmitter } from '@angular/core';
import { Materia } from './../materia';


@Component({
  selector: 'materia-detalle',
  templateUrl: './materia-detalle.component.html',
  styleUrls: ['./materia-detalle.component.css'],
  inputs: ['materia'],
  outputs : ['updateMateriaEvent', 'deleteMateriaEvent']
})
export class MateriaDetalleComponent implements OnInit {
    materia: any;
	
  private editNombre: boolean = false;
  private updateMateriaEvent = new EventEmitter();
  private deleteMateriaEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  this.editNombre=false;
  }

  onNombreClick(){
  this.editNombre=true;
  }

  updateMateria(){
    this.updateMateriaEvent.emit(this.materia);
  }

  deleteMateria(){
  this.deleteMateriaEvent.emit(this.materia);
}


}
