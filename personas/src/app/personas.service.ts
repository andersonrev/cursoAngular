import { Persona } from './persona.model';
import { LogginService } from './loggin.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';
@Injectable()
export class PersonasService{

  saludar = new EventEmitter<number>();

  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];

  constructor(private logginService: LogginService,
	      private dataService: DataService){}
  
  agregarPersona(persona: Persona){
    this.logginService.enviarMensaje("Hola Caballo" + persona.nombre);
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
  }
  eliminarPersona(indice: number){
    this.personas.splice(indice, 1);
  }

}
