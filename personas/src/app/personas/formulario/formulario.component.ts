import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  alertapro: number = 0;

//  @Output() personaCreada = new EventEmitter<Persona>();
  nombreInput:string;
  apellidoInput: string;
  index: number;

  constructor( private personasService: PersonasService,
	       private router: Router,
	       private route: ActivatedRoute) {
    
  }


  ngOnInit(): void {
      this.index = this.route.snapshot.params['id'];
    if(this.index){
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    } 
this.personasService
    .saludar
    .subscribe((indice:number)=> {
      alert("El indice es: " + indice);
    this.alertapro = indice;
    });
  }

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);

    if(this.index){
      this.personasService.modificarPersona(this.index, persona1);
    }else{
//   this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1); 
    }
    this.router.navigate(['personas']);

   }




}
