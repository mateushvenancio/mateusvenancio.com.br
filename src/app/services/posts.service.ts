import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postsUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mateushvenancio';

  constructor(private http: HttpClient) {}

  async getPosts() {
    let posts: PostModel[] = [];

    const _posts = await this.http.get(this.postsUrl).toPromise();

    _posts['items'].forEach((element) => {
      const _novo = new PostModel();

      _novo.data = element['pubDate'];
      _novo.titulo = element['title'];
      _novo.descricao = element['description'];
      _novo.categoria = element['categories'].map((e) => e.toString());

      posts.push(_novo);
    });

    return posts;
  }
}
