import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css'],
})
export class HomeAboutComponent implements OnInit {
  iconeWhatsapp = faWhatsapp;
  iconeEmail = faEnvelope;

  constructor() {}

  ngOnInit(): void {}

  abrirZap() {
    const link = 'https://api.whatsapp.com/send?phone=5565998009215';
    window.open(link);
  }

  abrirEmail() {
    const link = 'mailto:contato@mateusvenancio.com.br';
    window.open(link);
  }

  abrirCurriculo() {
    const link = 'https://gitconnected.com/mateushvenancio/resume';
    window.open(link);
  }
}
