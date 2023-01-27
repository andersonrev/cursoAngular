import { Component, OnInit, Input } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.scss']
})
export class CabeceroComponent implements OnInit {

  
  @Input()egresoTotal: number;
  @Input() ingresoTotal: number;
  constructor(private ingresoService: IngresoService,
	      private egresoService: EgresoService) { }

  ngOnInit(): void {
  }

}
