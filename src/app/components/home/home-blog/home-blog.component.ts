import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostModel } from 'src/app/models/post.model';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css'],
})
export class HomeBlogComponent implements OnInit {
  posts: PostModel[];

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe((result) => {
      this.posts = result.blog_posts;
      console.log('Posts: ', result.blog_posts);
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
