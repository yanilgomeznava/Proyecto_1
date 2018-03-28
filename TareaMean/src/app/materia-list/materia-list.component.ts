import { Component, OnInit, EventEmitter } from '@angular/core';
import {Materia} from '../materia';

@Component({
  selector: 'materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css'],
  inputs: ['materias'],
  outputs: ['SelectMateria']
})
export class MateriaListComponent implements OnInit {

public SelectMateria = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Materia){
    this.SelectMateria.emit(vid);
  }


}
