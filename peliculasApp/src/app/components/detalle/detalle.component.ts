import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

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

  estrella = 'star-outline';

  constructor(private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService) { }

  ngOnInit() {
    this.dataLocal.exitePelicula(this.id).then(
      existe => this.estrella = (existe) ? 'star' : 'start-outline'
    );

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
    const existe = this.dataLocal.guardarPelicula(this.pelicula);
    this.estrella = (existe)? 'start': 'star-outline';
  }
}
