import { Component, OnInit, Input} from '@angular/core';
import {Persona} from '../persona.model'; 
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  @Input()persona:Persona;
  @Input()indice:number;
  constructor() { }

  ngOnInit(): void {
  }

}
