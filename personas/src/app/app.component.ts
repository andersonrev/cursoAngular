import { Component, OnInit} from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  titulo = 'Lista de personas';
  ngOnInit(){

  } 
 /* onPersonaAgregada(persona:Persona){
    //this.personas.push(persona);
    //this.personaService.agregarPersona(persona);

  }
 */ 
}
