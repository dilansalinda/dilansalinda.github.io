import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = 'contact.dilansalinda.@gmail.com';

  socials = [
    {
      icon: 'fab fa-github',
      link: 'https://github.com/dilansalinda'
    },
    {
      icon: 'fab fa-linkedin',
      link: 'https://linkedin.com/in/dilansalinda'
    },
    {
      icon: 'fab fa-whatsapp',
      link: 'https://wa.me/94712345678'
    }
  ];
}