import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Impressum} from '../../components/impressum/impressum';
import {ContactForm} from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    Impressum,
    ContactForm,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class Contact {
}
