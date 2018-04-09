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
  providers: [MateriaService]
})
export class MateriaComponent implements OnInit {

  escuela: any;
  universidades: Array<Universidad>;
  materias: Array<Materia>;

  selectedMateria: Materia;
  private hidenewMateria: boolean = true;

  constructor(private _materiaService: MateriaService) { }

  ngOnInit() {
    this._materiaService.getUniversidades()
      .subscribe(resUniversidadData => this.universidades = resUniversidadData)

    this._materiaService.getMaterias()
      .subscribe(resMateriaData => this.materias = resMateriaData )
  }

  onSelectMateria(materia: any){
  this.selectedMateria = materia;
  this.hidenewMateria = true;
  console.log(this.selectedMateria);
  }


  onSubmitAddMateria(materia: Materia) {
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
