import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculas: PeliculaDetalle[] = [];
  constructor(private dataLocal: DataLocalService,
    private moviesService: MoviesService) { }

  async ngOnInit() {
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.moviesService.cargarGeneros();
  
  }

}
