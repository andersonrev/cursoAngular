import { Component, OnInit } from '@angular/core';
import { EgresoInterface } from './egreso.interface';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.scss']
})
export class EgresoComponent implements OnInit {
  egresos : EgresoInterface[] = [];
  constructor(private egresoService: EgresoService) { }

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }
  
  eliminar(egreso: EgresoInterface){
    this.egresoService.eliminarEgreso(egreso);
  }
}
