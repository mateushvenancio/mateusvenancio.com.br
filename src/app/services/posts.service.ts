import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl = 'https://mateushvenancio.github.io/data/posts.json';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<PostModel[]>(this.postsUrl);
  }

  getPostById(id) {
    return this.http.get(`https://mateushvenancio.github.io/data/posts_data/${id}/post.md`);
  }
}
