import { Component, OnInit, EventEmitter } from '@angular/core';
import { Foro } from '../foro';

@Component({
  selector: 'forolist',
  templateUrl: './forolist.component.html',
  styleUrls: ['./forolist.component.css'],
  inputs: ['foros'],
  outputs:['SelectForo']
})
export class ForolistComponent implements OnInit {

public SelectForo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Foro){
    this.SelectForo.emit(vid);
  }

}
