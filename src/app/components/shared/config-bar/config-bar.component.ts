import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
    selector: 'app-config-bar',
    templateUrl: './config-bar.component.html',
    styleUrls: ['./config-bar.component.css']
})
export class ConfigBarComponent implements OnInit {

    isDarkTheme: boolean

    constructor(private config: ConfigService) {
        this.isDarkTheme = this.config.isDarkTheme
    }

    ngOnInit(): void {

    }

    switchTheme() {
        this.isDarkTheme = !this.isDarkTheme
        this.config.setDarkTheme(this.isDarkTheme)
        location.reload()
    }

}
