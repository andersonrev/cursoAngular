import {Component, OnInit} from '@angular/core';
import {ChartData, ChartType, Color} from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {
  data1: ChartData<'doughnut'> = {
    labels: ['helado', 'rota', 'cara'],
    datasets: [
      {
        data: [201, 40, 10],
        backgroundColor: ['#6857E6', '#009ffe', '#f02059']
      }
    ],
  };

  constructor() {
  }

  ngOnInit(): void {
  }


}
