import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css'],
  inputs: ['profesores']
})
export class ProfesorListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
