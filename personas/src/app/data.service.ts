import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient){
  }

  cargarPersonas (){
     return this.httpClient.get('https://listado-personas-4c8bd.firebaseio.com/datos.json');
  }
  //Guardar Personas
  guardarPersonas(personas: Persona[]){
    this.httpClient.put('https://listado-personas-4c8bd.firebaseio.com/datos.json',personas)
      .subscribe(
	responde => console.log("resultado guardar personas"+ responde),
	error => console.log('error'+ error) 
	)
  }

  modificarPersona (index: number , persona: Persona){
    let url: string;
   url = 'https://listado-personas-4c8bd.firebaseio.com/datos/' + index +'.json';

    this.httpClient.put(url, persona)
      .subscribe(
	reponse => console.log("resultado modificar Persona:" + reponse),
	error => console.error("Error",error)
      )
  }

  eliminarPersona(index: number){
    let url: string;
   url = 'https://listado-personas-4c8bd.firebaseio.com/datos/' + index +'.json';

    this.httpClient.delete(url)
      .subscribe(
	reponse => console.log("resultado eliminar Persona:" + reponse),
	error => console.error("Error",error)
      )
 
  }
}
  


