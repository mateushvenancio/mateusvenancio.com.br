import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    isDarkMode: boolean

    constructor(private config: ConfigService) {
        this.isDarkMode = config.isDarkTheme
    }

    ngOnInit(): void {
    }

}
