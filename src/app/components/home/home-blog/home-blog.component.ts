import { Component, OnInit, SecurityContext } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css'],
})
export class HomeBlogComponent implements OnInit {
  posts: any;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().then((result) => {
      this.posts = result;
    });
  }

  sanitizarTexto(texto: String) {
    let charlimit = 150;
    if (!texto || texto.length <= charlimit) {
      return texto;
    }

    let without_html = texto.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }
}
