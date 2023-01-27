import {AfterViewInit, Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import {Feature} from 'ol';
import {Point} from 'ol/geom';
import {fromLonLat, Projection, toLonLat} from 'ol/proj';
import {Icon, Style} from 'ol/style';
// import Vector from 'ol/layer/Vector'
import Vector from 'ol/source/Vector';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import {coordinates} from 'ol/geom/flat/reverse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'openlayer';
  map: any;

  marcadores = [];
  vectorSource: any;
  vectorLayer: any;
  // rasterLayer;
  chicago: any;
  london: any;
  madrid: any;
  parqueAyora: any;
  // terminal;
  // colegioTulcan;

  constructor() {

  }

  ngOnInit() {
    // this.inicializarMapa();
    this.initilizeMap();
  }

  ngAfterViewInit() {

  }

  initilizeMap() {
    this.parqueAyora = new Feature({
      geometry: new Point(
        fromLonLat([-77.7369835, 0.8147288]))
    });
    this.parqueAyora.setStyle(new Style({
      image: new Icon(({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: 'assets/dot.png',
        imgSize: [20, 20],
      }))
    }));

    this.parqueAyora.properties = {
      cliente: 1,
    }

    this.chicago = new Feature({
      geometry: new Point(fromLonLat([-87.623177, 41.881832]))
    });

    this.chicago.setStyle(new Style({
      image: new Icon(({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: 'assets/vectorpoint.svg',
        imgSize: [20, 20]
      }))
    }));

    this.london = new Feature({
      geometry: new Point(fromLonLat([-0.12755, 51.507222]))
    });

    this.madrid = new Feature({
      geometry: new Point(fromLonLat([-3.683333, 40.4]))
    });

    this.london.setStyle(new Style({
      image: new Icon(({
        color: '#4271AE',
        crossOrigin: 'anonymous',
        src: 'assets/vectorpoint.svg',
        imgSize: [20, 20]
      }))
    }));

    this.madrid.setStyle(new Style({
      image: new Icon(({
        color: [113, 140, 0],
        crossOrigin: 'anonymous',
        src: 'assets/dot.png',
        imgSize: [20, 20]
      }))
    }));

    this.vectorSource = new VectorSource({
      features: [this.chicago, this.madrid, this.london, this.parqueAyora],

    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
    });

    // this.parqueAyora.onClick(()=>{
    //   console.log('hola');
    // })


    // this.parqueAyora.events.add("click", this.parqueAyora, function (e: any) {
    //
    //   console.log('miree');
    // });


    this.map = new Map({
      target: 'map',
      layers: [new TileLayer({
        source: new OSM()
      }), this.vectorLayer,
      ],
      view: new View({
        center: fromLonLat([2.896372, 44.60240]),
        zoom: 3,

      })
    });
    this.map.on('click', (e: any) => {
      const feature = this.map.forEachFeatureAtPixel(e.pixel, (ft: any) => {
        // this.map.gettarget().style.cursor = 'pointer';
        this.map.getTargetElement().style.cursor = 'pointer'
        return ft;
        // console.log(e);
      });

      console.log(feature);
      // this.map.forEachAddedItem(
      //   () => {
      //     console.log(e);
      //   }
      // )
      // this.map.forEachFeatureAtPixel(e.pixel, function (feature: any, layer: any) {
      //   console.log(feature, layer);
      // })
    });

    this.map.on('pointermove', (e: any) => {
      this.displayFeatureInfo(e.pixel);
      /*      this.map.forEachFeatureAtPixel(e.pixel, () => {

              //this.map.getTargetElement().style.cursor = 'pointer'
            })*/
      // let pixel = this.map.getEventPixel(evnt.originalEvent);
    })
  }

  displayFeatureInfo(pixel: any) {
    let features: any[] = [];
    this.map.forEachFeatureAtPixel(pixel, (feature: any) => {
      features.push(feature);
    });
    if (features.length > 0) {
      let info = [];
      let i, ii;
      for (i = 0, ii = features.length; i < ii; ++i) {
        info.push(features[i].get('desc'));
      }
      this.map.getTargetElement().style.cursor = 'pointer';
    } else {
      this.map.getTargetElement().style.cursor = '';
    }
  };

  inicializarMapa() {


    // agregar marcadores
    this.parqueAyora = new Feature({
      geometry: new Point(
        fromLonLat([0.8184545, -77.7164131,])
      )
    });

    this.parqueAyora.setStyle(new Style({
      image: new Icon({
        crossOrigin: 'anonymous',
        imgSize: [20, 20],
        src: 'assets/vectorpoint.svg',
      })
    }));

    // this.marcadores.push(this.parqueAyora);

    this.vectorSource = new VectorSource({
      features: [this.parqueAyora],
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    })

    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        }),
        this.vectorLayer
      ],
      view: new View({
        center: [2.896372, 44.60240],
        zoom: 3
      })

    });

    // this.rasterLayer = new TileLayer()

  }


}
