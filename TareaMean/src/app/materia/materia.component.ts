import { MateriaService } from './../materia.service';
import { Materia } from './../materia';
import { Escuela, programa, mallas } from './../escuela';
import { Universidad } from '../universidad';
import { Component, OnInit } from '@angular/core';
import { EscuelaService } from './../escuela.service';


@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css'],
  inputs: ['escuela', 'universidades'],
  providers: [MateriaService, EscuelaService]
})
export class MateriaComponent implements OnInit {

  
  universidades: Array<Universidad>;
  universidadSelected: String;
  materias: Array<Materia>;
  
  escuela: Escuela;
  escuelas: Array<Escuela>;
  escuelasUniversidad: Array<Escuela>;

  carreraSelected : any;
  mallaSelected: any;

  selectedMateria: Materia;

  private hidenewMateria: boolean = true;

  constructor(private _materiaService: MateriaService, private _escuelaService: EscuelaService) { }

  ngOnInit() {
    
    this._escuelaService.getEscuelas()
      .subscribe(resEscuelaData => this.escuelas = resEscuelaData );

    this._materiaService.getUniversidades()
      .subscribe(resUniversidadData => { 
          this.universidades = resUniversidadData;
          this.universidadSelected = (this.universidades)[0]._id;
          this.actualizarEscuelas();        
        });

    this._materiaService.getMaterias()
      .subscribe(resMateriaData => this.materias = resMateriaData )

  }
  //actualiza los datos de la escuela

  actualizarEscuelas(){
    this.escuelasUniversidad = [];
    this.carreraSelected = null;
    this.escuela = null;
    console.log(this.escuelasUniversidad);
    for (var p in this.escuelas){
      if (this.escuelas[p].universidad === this.universidadSelected)
        this.escuelasUniversidad.push(this.escuelas[p]);
    }
  }

  //selecciona la carrera segun la escuela
  onSelectEscuela(escuelaId: String){
    this.carreraSelected = null;
    this.escuela = null;
    for (var p in this.escuelas){
      if (this.escuelas[p]._id === escuelaId)
        this.escuela = this.escuelas[p];
    }
  }

  onSelectCarrera(carreraSel: String){
    this.mallaSelected = null;
    for (var p in this.escuela.programa){
      if (this.escuela.programa[p].nombrePrograma === carreraSel)
        this.carreraSelected = this.escuela.programa[p];
    }
  }

  //selecciona la malla segun la carrera
  onSelectMalla(malla: String){
    for (var p in this.carreraSelected.mallas){
      if (this.carreraSelected.mallas[p].nombreMalla === malla)
        this.mallaSelected = this.carreraSelected.mallas[p];
    }
  }

  onSelectUniversidad(universidadStr : String){
    console.log("onSelectUniversidad");
    this.universidadSelected = universidadStr;
    this.actualizarEscuelas();  
  }

  onSelectMateria(materia: any){
    this.selectedMateria = materia;
    this.hidenewMateria = true;
    console.log(this.selectedMateria);
  }

  //agrega materia

  onSubmitAddMateria(materia: Materia) {
    console.log(materia);
    materia.carrera = this.carreraSelected.nombrePrograma;
    materia.nombreMalla = new Array(this.mallaSelected.nombreMalla);
    this._materiaService.addMateria(materia)
    .subscribe(resNewMateria => {
      this.materias.push(resNewMateria);
      this.hidenewMateria = true;
      this.selectedMateria = resNewMateria;
    });

}

  onUpdateMateriaEvent(materia: any) {
    this._materiaService.updateMateria(materia)
      .subscribe(resUpdatedMateria => materia = resUpdatedMateria);
    this.selectedMateria = null;
  };


  onDeleteMateriaEvent(materia: any) {
  let materiaArray = this.materias;
  this._materiaService.deleteMateria(materia)
    .subscribe(resDeletedMateria => {
      for (let i = 0; i < materiaArray.length; i++) {
        if (materiaArray[i]._id === materia._id) {
          materiaArray.splice(i, 1);
        }
      }
    });
  this.selectedMateria = null;
};

/*onDropdown(u: any) {
  this.escuela.universidad = u;
};*/

newMateria(){
  this.hidenewMateria = false; 
}
}
