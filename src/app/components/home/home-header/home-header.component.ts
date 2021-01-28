import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

    iconeGithub = faGithub
    iconeLinkedin = faLinkedin
    iconeMedium = faMedium

    constructor() { }

    ngOnInit(): void {
    }

}
