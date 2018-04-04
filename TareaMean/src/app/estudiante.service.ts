import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Estudiante } from './estudiante';


@Injectable()
export class EstudianteService {
	private _getUrl = "/api/estudiantes";
	private _postUrl = "/api/estudiante";
	private _putUrl = "/api/estudiante/";
  private _deleteUrl = "/api/estudiante/";
  
  constructor(private _http: Http){}

  getEstudiantes(){
		return this._http.get(this._getUrl)
		.map((response: Response) => response.json());
  }
  
	getUniversidades(){
		return this._http.get("/api/universidades")
		.map((response: Response) => response.json());
  }
  
  addEstudiante(estudiante: Estudiante) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(estudiante), options)
        .map((response: Response) => response.json());
  }

 updateEstudiante(estudiante: Estudiante) {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this._http.put(this._putUrl + estudiante._id, JSON.stringify(estudiante), options)
    .map((response: Response) => response.json());
}

 deleteEstudiante(estudiante: Estudiante) {
  return this._http.delete(this._deleteUrl + estudiante._id)
    .map((response: Response) => response.json());
}


}


