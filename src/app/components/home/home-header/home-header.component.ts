import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { ProfileModel } from 'src/app/models/profile.model';

@Component({
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

    iconeGithub = faGithub
    iconeLinkedin = faLinkedin
    iconeMedium = faMedium
    iconeInstagram = faInstagram

    profileInfo: ProfileModel

    constructor() { }

    ngOnInit(): void {
    }

}
