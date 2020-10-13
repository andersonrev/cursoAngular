import { Persona } from './persona.model';
import { LogginService } from './loggin.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonasService{

  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];

  constructor(private logginService: LogginService ){}
  
  agregarPersona(persona: Persona){
    this.logginService.enviarMensaje("Hola Caballo" + persona.nombre);
    this.personas.push(persona);

  }


}
