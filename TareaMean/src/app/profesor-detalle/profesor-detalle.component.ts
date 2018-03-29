import { Component, OnInit, EventEmitter } from '@angular/core';
import { Profesor } from './../profesor';
@Component({
  selector: 'profesor-detalle',
  templateUrl: './profesor-detalle.component.html',
  styleUrls: ['./profesor-detalle.component.css'],
  inputs : ['profesor', 'universidades'],
  
  outputs : ['updateProfesorEvent', 'deleteProfesorEvent']
})
export class ProfesorDetalleComponent implements OnInit {

  profesor: any;
  universidades: any;
  universidad: any;
	
  private editNombre: boolean = false;
  private updateProfesorEvent = new EventEmitter();
  private deleteProfesorEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    for (let u of this.universidades) {
      if ( u._id == this.profesor.universidad ){
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
  
    updateProfesor(){
      this.updateProfesorEvent.emit(this.profesor);
    }
  
    deleteProfesor(){
    this.deleteProfesorEvent.emit(this.profesor);
  }

  onDropdown(u : any){
    this.profesor.universidad = u;
  };

}
