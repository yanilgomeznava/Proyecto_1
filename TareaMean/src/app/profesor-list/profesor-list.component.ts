import { Component, OnInit, EventEmitter } from '@angular/core';
import { Profesor } from '../profesor';

@Component({
  selector: 'profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css'],
  inputs: ['profesores'],
  outputs:['SelectProfesor']
})
export class ProfesorListComponent implements OnInit {

public SelectProfesor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Profesor){
    this.SelectProfesor.emit(vid);
  }


}
