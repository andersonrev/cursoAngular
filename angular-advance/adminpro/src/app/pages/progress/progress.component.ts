import {Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent {

  porcentage1 = 15;
  porcentage2 = 30;


  get getPorcentaje1() {
    return `${this.porcentage1}%`
  }


  get getPorcentaje2() {
    return `${this.porcentage2}%`
  }

}
