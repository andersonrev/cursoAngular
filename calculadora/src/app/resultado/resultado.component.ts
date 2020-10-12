import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  @Input()resultado : number;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
