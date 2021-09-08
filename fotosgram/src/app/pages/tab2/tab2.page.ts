import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempImages  =[];

  post = {
    mensaje: '',
    coords: null,
    position: false
  }

  constructor(private postService: PostsService) {}

  crearPost(){

    console.log(this.post);
    this.postService.crearPosts(this.post);

  }

}
