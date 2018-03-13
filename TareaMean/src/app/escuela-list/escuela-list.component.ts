import { Component, OnInit, EventEmitter } from '@angular/core';
import { Escuela } from '../escuela';

@Component({
  selector: 'escuela-list',
  templateUrl: './escuela-list.component.html',
  styleUrls: ['./escuela-list.component.css'],
  inputs: ['escuelas'],
  outputs:['SelectEscuela']
})
export class EscuelaListComponent implements OnInit {

  public SelectEscuela = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Escuela){
    this.SelectEscuela.emit(vid);
  }

}
