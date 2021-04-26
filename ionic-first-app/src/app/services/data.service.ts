import {HttpClient} from '@angular/common/http';
import {Componente} from '../interfaces/interfaces';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {

    }

    getUsuarios() {
        return this.http.get('http://jsonplaceholder.typicode.com/users');
    }

    getAlbums() {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
    }

    getMenuOpts() {
        return this.http.get<Componente[]>('/assets/data/menu-opts.json');
    }
}
