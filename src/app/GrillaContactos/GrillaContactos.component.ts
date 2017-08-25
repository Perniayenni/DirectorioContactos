import { Component } from '@angular/core';
import { contactoService } from '../services/service.contactos';

@Component({
  selector: 'app-GrillaContactos',
  templateUrl: 'GrillaContactos.component.html',
  styleUrls: ['GrillaContactos.component.css'],
})
export class GrillaContactosComponent {

  contactos:Array<string>=[];

  constructor( private _service:contactoService ){
    this._service.getConta()
      .subscribe(data => {
        for( let key$ in  data ){
            this.contactos.push(data[key$]);
        }
      });
  }


}
