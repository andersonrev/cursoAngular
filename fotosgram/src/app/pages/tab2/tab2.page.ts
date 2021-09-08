import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImages = [];
  cargandoGeo = false;

  post = {
    mensaje: '',
    coords: null,
    position: false
  }

  constructor(private postService: PostsService,
    private router: Router,
    private geolocation: Geolocation) { }

  async crearPost() {

    console.log(this.post);
    const creado = await this.postService.crearPosts(this.post);

    this.post = {
      mensaje: '',
      coords: null,
      position: false

    }

    this.router.navigateByUrl('/main/tabs/tab1');
    

  }

  getGeo(){

    if( !this.post.position){
      this.post.coords = null;
      return;
    }

    this.cargandoGeo = true;

    this.geolocation.getCurrentPosition().then(resp => {

      this.cargandoGeo = false;
      const coords = `${resp.coords.latitude}, ${resp.coords.longitude}`;
      console.log(coords);
      this.post.coords = coords;
    }
    ).catch(error => {
      this.cargandoGeo = false;
      console.log('Error al obtener location', error);
    })


    console.log(this.post);
  }

}
