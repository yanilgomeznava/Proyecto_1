import { Component, OnInit, EventEmitter } from '@angular/core';
import { Foro, tema, post } from './../foro';
import { NgIf } from '@angular/common';

@Component({
  selector: 'forodetalle',
  templateUrl: './forodetalle.component.html',
  styleUrls: ['./forodetalle.component.css'],
  inputs: ['foro'],
  outputs: ['updateForoEvent', 'deleteForoEvent']
})
export class ForodetalleComponent implements OnInit {

  foro: any;
  /*universidades: any;
  universidad: any;*/
  temaSeleccionado: tema;
  temaSeleccionadoNombre: String;
  postSeleccionadoNombre : String;

  private editNombre: boolean = false;
  private updateForoEvent = new EventEmitter();
  private deleteForoEvent = new EventEmitter();

  constructor() { }

   ngOnInit() {
    /*for (let u of this.universidades) {
      if (u._id == this.escuela.universidad) {
        this.universidad = u;
        break;
      }*/
    

    this.temaSeleccionado = this.foro.tema[0];

    if (this.temaSeleccionado) {
      this.temaSeleccionadoNombre = this.temaSeleccionado.tituloTema;
    }

  }

  ngOnChanges() {

    this.editNombre = false;
  }

  onNombreClick() {
    this.editNombre = true;
  }

  updateForo() {
    this.updateForoEvent.emit(this.foro);
  }

  deleteForo() {
    this.deleteForoEvent.emit(this.foro);
  }

  onAgregarNuevoTema(tema: tema) {
    tema.post = [];
    this.foro.tema.push(tema);
    console.log(this.foro.tema);
  };

  deleteTema() {
    var p: any;
    for (p in this.foro.tema) {
      if (this.foro.tema[p].tituloTema === this.temaSeleccionado.tituloTema) {
        this.foro.tema.splice(p, 1);
      }
    }
  };

  deletePost(value) {
    var p: any;
    for (p in this.temaSeleccionado.post) {
      if (this.temaSeleccionado.post[p].tituloPost === this.postSeleccionadoNombre) {
        this.temaSeleccionado.post.splice(p, 1);
      }
    }
  };

  onAgregarNuevaPost(post: any) {
    this.temaSeleccionado.post.push(post);
    var p: any;
    for (p in this.foro.tema) {
      if (this.foro.tema[p].tituloTema === this.temaSeleccionado.tituloTema) {
        this.foro.tema[p] = this.temaSeleccionado;
      }
    }
  };

  onDropdown(u: any) {
    //this.foro.universidad = u;
  };

  onChangeTema(newValue) {
    var p: any;
    for (p in this.foro.tema) {
      if (this.foro.tema[p].tituloTema === newValue) {
        this.temaSeleccionado = this.foro.tema[p];
      }
    }
  }

}
