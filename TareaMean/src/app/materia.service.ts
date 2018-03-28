import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Materia } from './materia';



@Injectable()
export class MateriaService {
	
	private _getUrl = "/api/materias";
	private _postUrl = "/api/materia";
	private _putUrl = "/api/materia/";
	private _deleteUrl = "/api/materia/";

	constructor(private _http: Http){}

	getMaterias(){
		return this._http.get(this._getUrl)
		.map((response: Response) => response.json());
	}

	addMateria(materia: Materia) {
    	let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
    	return this._http.post(this._postUrl, JSON.stringify(materia), options)
      		.map((response: Response) => response.json());
  	}

   updateMateria(materia: Materia) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + materia._id, JSON.stringify(materia), options)
      .map((response: Response) => response.json());
  }

   deleteMateria(materia: Materia) {
    return this._http.delete(this._deleteUrl + materia._id)
      .map((response: Response) => response.json());
  }
  
  

}
