import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class contactoService {

  contURL:string = 'http://localhost:3000/api/users';

    constructor( private http: Http ) { }

  getConta() {
    return this.http.get(this.contURL)
      .map( res => res.json() );
  }
}
