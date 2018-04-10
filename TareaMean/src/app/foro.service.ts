import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Foro } from './foro';


@Injectable()
export class ForoService {

  private _getUrl = "/api/foros";
	private _postUrl = "/api/foro";
	private _putUrl = "/api/foro/";
  private _deleteUrl = "/api/foro/";
  
  constructor(private _http: Http){}

  getForos(){
		return this._http.get(this._getUrl)
		.map((response: Response) => response.json());
  }
  
	/*getUniversidades(){
		return this._http.get("/api/universidades")
		.map((response: Response) => response.json());
  }*/
  
  addForo(foro: Foro) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(foro), options)
        .map((response: Response) => response.json());
  }

 updateForo(foro: Foro) {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this._http.put(this._putUrl + foro._id, JSON.stringify(foro), options)
    .map((response: Response) => response.json());
}

 deleteForo(foro: Foro) {
  return this._http.delete(this._deleteUrl + foro._id)
    .map((response: Response) => response.json());
}

}
