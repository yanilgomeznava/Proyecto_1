import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Escuela } from './escuela';


@Injectable()
export class EscuelaService {
	private _getUrl = "/api/escuelas";
	private _postUrl = "/api/escuela";
	private _putUrl = "/api/escuela/";
  private _deleteUrl = "/api/escuela/";
  
  constructor(private _http: Http){}

  getEscuelas(){
		return this._http.get(this._getUrl)
		.map((response: Response) => response.json());
  }
  
	getUniversidades(){
		return this._http.get("/api/universidades")
		.map((response: Response) => response.json());
  }
  
  addEscuela(escuela: Escuela) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(escuela), options)
        .map((response: Response) => response.json());
  }

 updateEscuela(escuela: Escuela) {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this._http.put(this._putUrl + escuela._id, JSON.stringify(escuela), options)
    .map((response: Response) => response.json());
}

 deleteEscuela(escuela: Escuela) {
  return this._http.delete(this._deleteUrl + escuela._id)
    .map((response: Response) => response.json());
}


}


