import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    githubIcon = faGithub
    instagramIcon = faInstagram
    linkedinIcon = faLinkedin
    mediumIcon = faMedium

    constructor() { }

    ngOnInit(): void {
    }

}
