import { PostModel } from './post.model';
import { ProjectModel } from './project.model';

export class ProfileModel {
  nome: string;
  image: string;
  frase: string;
  about_me: string;
  projects: ProjectModel[];
  blog_posts: PostModel[];
}
