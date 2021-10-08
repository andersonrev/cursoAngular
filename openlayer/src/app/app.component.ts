import { AfterViewInit, Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'openlayer';
  map: any;

  constructor(){

  }

  ngOnInit(){
    this.inicializarMapa();
  }

  ngAfterViewInit(){

  }

  inicializarMapa(){
    this.map= new Map({
      target: 'map',
      layers: [
	new Tile({
	  source: new OSM()
	})
      ],
      view: new View({
	center: [0.8147288,-77.7369835],
	zoom: 15
      })

    });
  }

}
