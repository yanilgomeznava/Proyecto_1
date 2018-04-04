import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Profesor } from './profesor';


@Injectable()
export class ProfesorService {
	private _getUrl = "/api/profesores";
	private _postUrl = "/api/profesor";
	private _putUrl = "/api/profesor/";
  private _deleteUrl = "/api/profesor/";
  
  constructor(private _http: Http){}

  getProfesores(){
		return this._http.get(this._getUrl)
		.map((response: Response) => response.json());
  }
  
	getUniversidades(){
		return this._http.get("/api/universidades")
		.map((response: Response) => response.json());
  }
  
  addProfesor(profesor: Profesor) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(profesor), options)
        .map((response: Response) => response.json());
  }

 updateProfesor(profesor: Profesor) {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this._http.put(this._putUrl + profesor._id, JSON.stringify(profesor), options)
    .map((response: Response) => response.json());
}

 deleteProfesor(profesor: Profesor) {
  return this._http.delete(this._deleteUrl + profesor._id)
    .map((response: Response) => response.json());
}


}


