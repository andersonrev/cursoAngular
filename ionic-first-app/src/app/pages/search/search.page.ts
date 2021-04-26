import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    albumnes: any[ ] = [];
    textoBuscar = '';

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getAlbums().subscribe(albumnes => {
            this.albumnes = albumnes;
        });
    }

    onSearchChange(event: any) {
        // console.log(event);
        this.textoBuscar = event.detail.value;
    }
}
