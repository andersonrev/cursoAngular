import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Persona } from '../persona.model'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

    personas: Persona[] = [];

    constructor(private personasService: PersonasService,
    private router: Router){
  }

    ngOnInit(){
//    this.personas = this.personasService.personas;
      this.personasService.obtenerPersonas().subscribe(
	  (personas: Persona[])=>{
	    this.personas = personas;
	    this.personasService.setPersonas(personas);
	  },
	  error => console.error('auxilio', error)
	)
  }
 

  agregar(){
   this.router.navigate(['personas/agregar']); 
  }

}
