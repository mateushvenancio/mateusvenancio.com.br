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

    profileInfos: ProfileModel[] = [
        new ProfileModel('https://www.jbox.com.br/wp/wp-content/uploads/2020/08/pok%C3%A9mon-koko-filme-destacada.jpg', 'I see now that one’s birth is irrelevant. It’s what you do that determines who you are.'),
        new ProfileModel('https://2.bp.blogspot.com/-qS7XRe8KRuA/UpDMxKYvJeI/AAAAAAAAHzo/6rzdifeYonQ/s1600/WhoCookiesSugarBeanBakersBB.jpg', 'The universe is big. It’s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles.'),
        new ProfileModel('https://64.media.tumblr.com/8bdd29006355ffd036d3df2e61a2184d/tumblr_inline_o8vkcfotu51s3mkdf_250.png', 'The right thing... what is it? I wonder, if you do the right thing, does it really make everyone happy?'),
    ]

    constructor() { }

    ngOnInit(): void {
        this.profileInfo = this.profileInfos[Math.floor(Math.random() * this.profileInfos.length)]
    }

}
