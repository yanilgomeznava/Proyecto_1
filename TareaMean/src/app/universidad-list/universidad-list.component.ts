import {Universidad} from './../universidad';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'universidad-list',
  templateUrl: './universidad-list.component.html',
  styleUrls: ['./universidad-list.component.css'],
  inputs: ['universidades'],
  outputs: ['SelectUniversidad']
})
export class UniversidadListComponent implements OnInit {

public SelectUniversidad = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Universidad){
  this.SelectUniversidad.emit(vid);
  }

}
