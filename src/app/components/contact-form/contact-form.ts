import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
    imports: [
        FormsModule
    ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
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
