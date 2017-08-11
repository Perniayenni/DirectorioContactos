import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BusquedaBtnAgregarComponent} from "./Busqueda_BtnAgregar/Busqueda_BtnAgregar.component";
import {GrillaContactosComponent} from "./GrillaContactos/GrillaContactos.component"

@NgModule({
  declarations: [
    AppComponent,
    BusquedaBtnAgregarComponent,
    GrillaContactosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
