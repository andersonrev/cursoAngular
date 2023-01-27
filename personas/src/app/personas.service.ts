import { Persona } from './persona.model';
import { LogginService } from './loggin.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';
@Injectable()
export class PersonasService{

  saludar = new EventEmitter<number>();

  personas: Persona[] = [];

  constructor(private logginService: LogginService,
	      private dataService: DataService){}
  
  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  obtenerPersonas(){
     return  this.dataService.cargarPersonas();
  }
  agregarPersona(persona: Persona){
    this.logginService.enviarMensaje("Hola Caballo" + persona.nombre);
    if(this.personas == null){
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);

  }

  encontrarPersona(indice: number){
    let persona: Persona = this.personas[indice];
    return persona;
  }
  
  modificarPersona(indice:number, persona:Persona){
    let persona1 = this.personas[indice];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(indice,persona);
  }
  eliminarPersona(indice: number){
    this.personas.splice(indice, 1);
    this.dataService.eliminarPersona(indice);
    // se vuelve a guardar el arreglo para regenerar los indices en la bd
    this.modificarPersonas();
  }

  modificarPersonas(){
    if(this.personas != null){
      this.dataService.guardarPersonas(this.personas);
    }
  }

}
