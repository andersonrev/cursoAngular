import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

//  @Output() personaCreada = new EventEmitter<Persona>();
  nombreInput:string;
  apellidoInput: string;
  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {

  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
 //   this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1); 

  }



}
