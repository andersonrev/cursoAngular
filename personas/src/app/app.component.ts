import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import { Persona } from './persona.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  titulo = 'Lista de personas';
  ngOnInit(){
    firebase.initializeApp({
      apikey:"AIzaSyC1a40eAQTRnGSlw2NiiO3EBowOB9DH1YY",
      authDomain: "listado-personas-4c8bd.firebaseapp.com"
    })
  } 
 /* onPersonaAgregada(persona:Persona){
    //this.personas.push(persona);
    //this.personaService.agregarPersona(persona);

  }
 */ 
}
