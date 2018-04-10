import { EscuelaService } from './../escuela.service';
import { Component, OnInit } from '@angular/core';
import { Escuela, programa } from './../escuela';
import { Universidad } from '../universidad';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css'],
  providers: [EscuelaService]
})
export class EscuelaComponent implements OnInit {


  escuelas: Array<Escuela>;
  universidades: Array<Universidad>;

  selectedEscuela: Escuela;
  private hidenewEscuela: boolean = true;
  selectedPrograma: programa;
  programasTemp: Array<programa>;

  constructor(private _escuelaService: EscuelaService) { }

  // LSITA DE UNIVERSDADES Y ESCUELAS
  ngOnInit() {
    this._escuelaService.getEscuelas()
      .subscribe(resEscuelaData => this.escuelas = resEscuelaData);
    this._escuelaService.getUniversidades()
      .subscribe(resUniversidadData => this.universidades = resUniversidadData)
    this.programasTemp = new Array(); 
    }

  // SELECCIONAR ESCUELA ESPECIFICA
  onSelectEscuela(escuela: any) {
    this.selectedEscuela = escuela;
    this.hidenewEscuela = true;
    console.log(this.selectedEscuela);
  }


//AGREGAR ESCUELA
  onSubmitAddEscuela(escuela: Escuela) {
    escuela.programa = this.programasTemp;
    this.programasTemp = new Array();
    this._escuelaService.addEscuela(escuela)
      .subscribe(resNewEscuela => {
        this.escuelas.push(resNewEscuela);
        this.hidenewEscuela = true;
        this.selectedEscuela = resNewEscuela;
        console.log(resNewEscuela);
      });

  }
  
//ACTUALIZAR ESCUELA
  onUpdateEscuelaEvent(escuela: any) {
    this._escuelaService.updateEscuela(escuela)
      .subscribe(resUpdatedEscuela => escuela = resUpdatedEscuela);
    this.selectedEscuela = null;
  };

//BORRAR ESCUELA
  onDeleteEscuelaEvent(escuela: any) {
    let escuelaArray = this.escuelas;
    this._escuelaService.deleteEscuela(escuela)
      .subscribe(resDeletedEscuela => {
        for (let i = 0; i < escuelaArray.length; i++) {
          if (escuelaArray[i]._id === escuela._id) {
            escuelaArray.splice(i, 1);
          }
        }
      });
    this.selectedEscuela = null;
  };

  onAgregarNuevoPrograma(programa: any) {
    this.programasTemp.push(programa);
  };

  newEscuela() {
    this.hidenewEscuela = false;
  }
}
