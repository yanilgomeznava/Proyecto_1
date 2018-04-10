import { Component, OnInit } from '@angular/core';
import { ForoService } from './../foro.service';
import { Foro, tema } from './../foro';
//import { Universidad } from '../universidad';
 
@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
  providers: [ForoService]
})
export class ForoComponent implements OnInit {

  foros: Array<Foro>;
  //universidades: Array<Universidad>;

  selectedForo: Foro;
  private hidenewForo: boolean = true;
  selectedTema: tema;
  temasTemp: Array<tema>;

  constructor(private _foroService: ForoService) { }

  ngOnInit() {
    this._foroService.getForos()
      .subscribe(resForoData => this.foros = resForoData);
    /*this._foroService.getUniversidades()
      .subscribe(resUniversidadData => this.universidades = resUniversidadData)*/
    this.temasTemp = new Array(); 
    }

  onSelectForo(foro: any) {
    this.selectedForo = foro;
    this.hidenewForo = true;
    console.log(this.selectedForo);
  }



  onSubmitAddForo(foro: Foro) {
    foro.tema = this.temasTemp;
    this.temasTemp = new Array();
    console.log(foro);
    console.log("dfdfdfff");
    this._foroService.addForo(foro)
      .subscribe(resNewForo => {
        this.foros.push(resNewForo);
        this.hidenewForo = true;
        this.selectedForo = resNewForo;
        console.log(resNewForo);
      });

  }
  

  onUpdateForoEvent(foro: any) {
    this._foroService.updateForo(foro)
      .subscribe(resUpdatedForo => foro = resUpdatedForo);
    this.selectedForo = null;
  };


  onDeleteForoEvent(foro: any) {
    let foroArray = this.foros;
    this._foroService.deleteForo(foro)
      .subscribe(resDeletedForo => {
        for (let i = 0; i < foroArray.length; i++) {
          if (foroArray[i]._id === foro._id) {
            foroArray.splice(i, 1);
          }
        }
      });
    this.selectedForo = null;
  };

  onAgregarNuevoTema(tema: any) {
    this.temasTemp.push(tema);
  };

  newForo() {
    this.hidenewForo = false;
  }

}
