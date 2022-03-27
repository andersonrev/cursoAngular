import {Component, Input, OnInit} from '@angular/core';
import {ChartData, ChartType} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  @Input()
  titulo = '';


  labelsDefault: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  @Input()
  data: ChartData<'doughnut'> = {
    labels: this.labelsDefault,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009ffe', '#f02059']
      }
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor() {
  }

  ngOnInit(): void {
  }
  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
