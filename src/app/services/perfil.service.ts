import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfileModel } from '../models/profile.model';
import { ProjectModel } from '../models/project.model';
import { SkillModel } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  url = 'https://gitconnected.com/v1/portfolio/mateushvenancio';

  perfil: ProfileModel
  projects: Subject<ProjectModel[]> = new Subject<ProjectModel[]>();;
  skills: Subject<SkillModel[]> = new Subject<SkillModel[]>();;

  constructor(private http: HttpClient) {
    this.getPerfil();
  }

  getPerfil() {
    this.http.get(this.url).subscribe(result => {
      this.projects.next(result['projects']);
      this.skills.next(result['skills']);
    });
  }
}
