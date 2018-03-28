import { Component, OnInit } from '@angular/core';
import { Profesor } from '../profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  profesores: Profesor[]=[{"_id":"2","nombre":"Juan","userName":"AAR","pass":"AAR","email":"aaa@aaa.com","universidad":"TEC","carne":"2222222","malla":"410","esProfesor":true}];

  constructor() { }

  ngOnInit() {
  }

}
