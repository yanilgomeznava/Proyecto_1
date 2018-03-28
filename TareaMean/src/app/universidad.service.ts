import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Universidad } from './universidad';



@Injectable()
export class UniversidadService {
	
	private _getUrl = "/api/universidades";
	private _postUrl = "/api/universidad";
	private _putUrl = "/api/universidad/";
	private _deleteUrl = "/api/universidad/";

	constructor(private _http: Http){}

	getUniversidades(){
		return this._http.get(this._getUrl)
		.map((response: Response) => response.json());
	}

	addUniversidad(universidad: Universidad) {
    	let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
    	return this._http.post(this._postUrl, JSON.stringify(universidad), options)
      		.map((response: Response) => response.json());
  	}

   updateUniversidad(universidad: Universidad) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + universidad._id, JSON.stringify(universidad), options)
      .map((response: Response) => response.json());
  }

   deleteUniversidad(universidad: Universidad) {
    return this._http.delete(this._deleteUrl + universidad._id)
      .map((response: Response) => response.json());
  }
  
  

}
