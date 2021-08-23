import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/respuesa-posts.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  habilitado = true;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.siguientes();
  }

  recargar(event: any) {

    this.siguientes(event, true);
    this.habilitado = true;
    this.posts = [];

  }

  siguientes(event?: any, pull: boolean = false) {
    this.postService.getPosts(pull)
      .subscribe(resp => {
        console.log(resp);
        this.posts.push(...resp.posts);

        if (event) {
          event.target.complete();
          if (resp.posts.length === 0) {
            this.habilitado = false;
          }
        }
      });

  }

}
