import { Component, OnInit, EventEmitter } from '@angular/core';
import { Universidad } from './../universidad';


@Component({
  selector: 'universidad-detalle',
  templateUrl: './universidad-detalle.component.html',
  styleUrls: ['./universidad-detalle.component.css'],
  inputs: ['universidad'],
  outputs : ['updateUniversidadEvent', 'deleteUniversidadEvent']
})
export class UniversidadDetalleComponent implements OnInit {
    universidad: any;
	
  private editNombre: boolean = false;
  private updateUniversidadEvent = new EventEmitter();
  private deleteUniversidadEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  this.editNombre=false;
  }

  onNombreClick(){
  this.editNombre=true;
  }

  updateUniversidad(){
    this.updateUniversidadEvent.emit(this.universidad);
  }

  deleteUniversidad(){
  this.deleteUniversidadEvent.emit(this.universidad);
}


}
