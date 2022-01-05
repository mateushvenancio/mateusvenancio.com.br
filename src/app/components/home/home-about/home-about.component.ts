import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent implements OnInit {

  iconeWhatsapp = faWhatsapp
  iconeEmail = faEnvelope

  constructor() { }

  ngOnInit(): void {
  }

}
