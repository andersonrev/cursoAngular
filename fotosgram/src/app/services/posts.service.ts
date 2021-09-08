import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaPosts, Post } from '../interfaces/respuesa-posts.interface';
import { UsuarioService } from './usuario.service';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;


  nuevoPost = new EventEmitter<Post>();

  constructor(private http: HttpClient,
    private usuarioService: UsuarioService) {
  }
  getPosts(pull: boolean = false) {
    if (pull) {
      this.paginaPosts = 0;
    }
    this.paginaPosts++;
    return this.http.get<RespuestaPosts>(`${URL}/posts/?pagina=${this.paginaPosts}`);
  }

  crearPosts(post) : Promise<boolean>{
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise<boolean>(resolve => {
      this.http.post(`${URL}/posts`, post, { headers })
        .subscribe(
          resp => {
            // console.log(resp);
            this.nuevoPost.emit(resp['post']);
            resolve(true);
          }
        )

    });



  }

}
