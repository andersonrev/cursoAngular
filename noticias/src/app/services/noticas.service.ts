import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticasService {

  constructor(private http: HttpClient) { }
  getTopHeadLines() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?apiKey=97b9603fcb744b37ae5adc74cf1d32cd&country=us`);

  }
}
