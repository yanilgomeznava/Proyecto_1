import { UniversidadService } from './../universidad.service';
import { Universidad } from './../universidad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css'],
  providers: [UniversidadService]
})
export class UniversidadComponent implements OnInit {


universidades: Array<Universidad>;

  selectedUniversidad: Universidad;
  private hidenewUniversidad: boolean = true;

  constructor(private _universidadService: UniversidadService) { }

  //
  ngOnInit() {
    this._universidadService.getUniversidades()
      .subscribe(resUniversidadData => this.universidades = resUniversidadData )
  }

  //SELECION DE UNIVERSIDAD
  onSelectUniversidad(universidad: any){
  this.selectedUniversidad = universidad;
  this.hidenewUniversidad = true;
  console.log(this.selectedUniversidad);
  }

// AGREGAR UNIVERSIDAD
  onSubmitAddUniversidad(universidad: Universidad) {
  this._universidadService.addUniversidad(universidad)
    .subscribe(resNewUniversidad => {
      this.universidades.push(resNewUniversidad);
      this.hidenewUniversidad = true;
      this.selectedUniversidad = resNewUniversidad;
    });

}
//ACTUALIAR UNIVERSIDAD
  onUpdateUniversidadEvent(universidad: any) {
    this._universidadService.updateUniversidad(universidad)
      .subscribe(resUpdatedUniversidad => universidad = resUpdatedUniversidad);
    this.selectedUniversidad = null;
  };

// BORRAR UNIVERSIDAD
  onDeleteUniversidadEvent(universidad: any) {
  let universidadArray = this.universidades;
  this._universidadService.deleteUniversidad(universidad)
    .subscribe(resDeletedUniversidad => {
      for (let i = 0; i < universidadArray.length; i++) {
        if (universidadArray[i]._id === universidad._id) {
          universidadArray.splice(i, 1);
        }
      }
    });
  this.selectedUniversidad = null;
};

newUniversidad(){
  this.hidenewUniversidad = false; 
}
}
