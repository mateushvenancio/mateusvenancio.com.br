import { LinkModel } from './link.model';

export class ProjectModel {
  title: string;
  link: string;
  descricao: string;
  tags: string[];
  links: LinkModel[];
}
