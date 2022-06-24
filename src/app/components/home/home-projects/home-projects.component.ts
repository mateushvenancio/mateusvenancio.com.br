import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { ProfileModel } from 'src/app/models/profile.model';
import { ProjectModel } from 'src/app/models/project.model';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.css'],
})
export class HomeProjectsComponent implements OnInit {
  iconeGithub = faGithub;

  projects: ProjectModel[] = [];

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe((result) => {
      this.projects = result.projects;
    });
  }
}
