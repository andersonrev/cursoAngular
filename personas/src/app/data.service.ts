import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient){
  }

  //Guardar Personas
  guardarPersonas(personas: Persona[]){
    this.httpClient.put('https://listado-personas-4c8bd.firebaseio.com/datos.json',personas)
      .subscribe(
	responde => console.log("resultado guardar personas"+ responde),
	error => console.log('error'+ error) 
	)
  }

  

}
