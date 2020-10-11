import { Component } from '@angular/core';
import { Persona } from './persona.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Lista de personas';
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];

  onPersonaAgregada(persona: Persona){
    this.personas.push(persona);
  }

}
