import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RespuestoTopHeadlines} from '../interfaces/interfaces';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-Key': apiKey
})

@Injectable({
  providedIn: 'root'
})
export class NoticasService {

  headlinesPage = 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) {
  }

  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, {headers})

  }

  getTopHeadLines() {
    this.headlinesPage++;
    return this.ejecutarQuery<RespuestoTopHeadlines>(`/top-headlines?country=us&page=${this.headlinesPage}`)

    // return this.http.get<RespuestoTopHeadlines>(`${apiUrl}/top-headlines?apiKey=97b9603fcb744b37ae5adc74cf1d32cd&country=us`);

  }

  getTopHeadLinesCategorias(categoria: string) {

    if (this.categoriaActual === categoria) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    // return this.http.get<RespuestoTopHeadlines>(`https://newsapi.org/v2/top-headlines?apiKey=97b9603fcb744b37ae5adc74cf1d32cd&country=us`);
    return this.ejecutarQuery<RespuestoTopHeadlines>(`/top-headlines?country=us&category=${categoria}&page=${this.categoriaPage}`);
  }
}
