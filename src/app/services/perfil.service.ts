import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProfileModel } from '../models/profile.model';
import { ProjectModel } from '../models/project.model';
import { SkillModel } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  // url = 'https://gitconnected.com/v1/portfolio/mateushvenancio';
  url =
    'https://raw.githubusercontent.com/mateushvenancio/projetos-md/main/api_site.json';

  constructor(private http: HttpClient) {
    this.getPerfil();
  }

  getPerfil(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(this.url);
  }
}
