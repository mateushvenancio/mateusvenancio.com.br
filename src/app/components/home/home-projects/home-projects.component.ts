import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home-projects',
    templateUrl: './home-projects.component.html',
    styleUrls: ['./home-projects.component.css']
})
export class HomeProjectsComponent implements OnInit {

    iconeGithub = faGithub

    constructor() { }

    ngOnInit(): void {
    }

}
