import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    isDarkTheme: boolean = false;

    constructor() {
        let isDarkTheme: boolean = JSON.parse(localStorage.getItem('isDarkTheme'))
        if (isDarkTheme != null) {
            this.isDarkTheme = isDarkTheme
        }
    }

    setDarkTheme(isDarkTheme: boolean) {
        localStorage.setItem('isDarkTheme', isDarkTheme.toString())
        this.isDarkTheme = isDarkTheme
    }
}
