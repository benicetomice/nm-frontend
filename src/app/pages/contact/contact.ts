import {Component, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Footer} from '../../components/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  model = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Formular gesendet:', this.model);
    alert('Nachricht wurde gesendet!');
  }
}
