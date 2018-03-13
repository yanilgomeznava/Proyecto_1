import { Component, OnInit, EventEmitter } from '@angular/core';
import { Escuela } from './../escuela';
@Component({
  selector: 'escuela-detalle',
  templateUrl: './escuela-detalle.component.html',
  styleUrls: ['./escuela-detalle.component.css'],
  inputs : ['escuela', 'universidades'],
  outputs : ['updateEscuelaEvent', 'deleteEscuelaEvent']
})
export class EscuelaDetalleComponent implements OnInit {

  escuela: any;
  universidades: any;
  universidad: any;
	
  private editNombre: boolean = false;
  private updateEscuelaEvent = new EventEmitter();
  private deleteEscuelaEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    for (let u of this.universidades) {
      if ( u._id == this.escuela.universidad ){
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
  
    updateEscuela(){
      this.updateEscuelaEvent.emit(this.escuela);
    }
  
    deleteEscuela(){
    this.deleteEscuelaEvent.emit(this.escuela);
  }

  onAgregarNuevoPrograma(programa: any) {
    this.escuela.programa.push(programa);
  };
  onDropdown(u : any){
    this.escuela.universidad = u;
  };


}


