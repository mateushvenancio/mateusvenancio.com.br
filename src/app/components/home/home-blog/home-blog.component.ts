import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

  posts: PostModel[]

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      (posts: PostModel[]) => this.posts = posts
    )
  }

}
