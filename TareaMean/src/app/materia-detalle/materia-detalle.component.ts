import { Component, OnInit, EventEmitter } from '@angular/core';
import { Materia } from './../materia';


@Component({
  selector: 'materia-detalle',
  templateUrl: './materia-detalle.component.html',
  styleUrls: ['./materia-detalle.component.css'],
  inputs: ['materia', 'universidades', 'escuela'],
  outputs : ['updateMateriaEvent', 'deleteMateriaEvent']
})
export class MateriaDetalleComponent implements OnInit {
    escuela:any;
    materia: any;
    universidades: any;
    universidad: any;
	
  private editNombre: boolean = false;
  private updateMateriaEvent = new EventEmitter();
  private deleteMateriaEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
    for (let u of this.universidades) {
      if (u._id == this.escuela.universidad) {
        this.universidad = u;
        break;
      }
    }
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

onDropdown(u: any) {
  this.escuela.universidad = u;
};

}
