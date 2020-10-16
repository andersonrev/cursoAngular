import { Persona } from './persona.model';
import { LogginService } from './loggin.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{

  saludar = new EventEmitter<number>();

  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];

  constructor(private logginService: LogginService ){}
  
  agregarPersona(persona: Persona){
    this.logginService.enviarMensaje("Hola Caballo" + persona.nombre);
    this.personas.push(persona);

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


}
