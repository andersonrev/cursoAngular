import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];

  oculto = 150;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }

  constructor(private moviesService: MoviesService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.id);
    this.moviesService.getPeliculaDetalle(this.id).subscribe(res => {
      this.pelicula = res;
      console.log(res)
    });

    this.moviesService.getActoresPelicula(this.id).subscribe(res => {
      this.actores = res.cast;
      console.log(res)
    });

  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favoritos() {
    
  }
}
