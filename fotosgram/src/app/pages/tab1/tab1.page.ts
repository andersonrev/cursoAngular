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

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.siguientes();
  }

  siguientes(event?: any) {
    this.postService.getPosts()
      .subscribe(resp => {
        console.log(resp);
        this.posts.push(...resp.posts);

        if (event) {
          event.target.complete();
          if (resp.posts.length === 0) {
            event.target.disabled = true;
          }
        }
      });

  }

}
