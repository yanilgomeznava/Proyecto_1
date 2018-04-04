import { Component, OnInit, EventEmitter } from '@angular/core';
import { Estudiante } from '../estudiante';

@Component({
  selector: 'estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css'],
  inputs: ['estudiantes'],
  outputs:['SelectEstudiante']
})
export class EstudianteListComponent implements OnInit {

public SelectEstudiante = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Estudiante){
    this.SelectEstudiante.emit(vid);
  }


}
