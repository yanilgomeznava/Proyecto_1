import { Component, OnInit, EventEmitter } from '@angular/core';
import { Materia } from './../materia';


@Component({
  selector: 'materia-detalle',
  templateUrl: './materia-detalle.component.html',
  styleUrls: ['./materia-detalle.component.css'],
  inputs: ['materia', 'universidades', 'escuelas'],
  outputs : ['updateMateriaEvent', 'deleteMateriaEvent']
})
export class MateriaDetalleComponent implements OnInit {
    escuelas:any;
    escuela: any;
    materia: any;
    universidades: any;
    universidad: any;
    universidadId: String;
	
  private editNombre: boolean = false;
  private updateMateriaEvent = new EventEmitter();
  private deleteMateriaEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
    console.log(this.universidades);
    console.log(this.escuelas);

      //selecciona universidad segun la materia
    for (let u of this.universidades) {
      console.log(u);
      if (u._id === this.materia.universidad) {
        this.universidad = u;
        this.universidadId = this.materia.universidad;
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
