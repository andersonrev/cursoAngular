import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

@Input() peliculas : Pelicula[] = [];
@Output() cargarMas = new EventEmitter();



 
  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10,
  }


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onClick(){
    console.log('cargar mas');
    this.cargarMas.emit();
  }

  async verDetalle(id: string) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();



  }

  

}
