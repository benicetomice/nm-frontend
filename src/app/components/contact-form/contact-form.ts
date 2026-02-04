import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
    imports: [
        FormsModule
    ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  constructor(private http: HttpClient) {}

  model = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    this.http.post(
      'http://localhost:8080/api/contact',
      this.model
    ).subscribe({
      next: () => alert('Nachricht gesendet!'),
      error: (err) => {
        if (err.status === 400) {
          alert('Bitte überprüfe deine Eingaben');
        } else {
          alert('Serverfehler')
        }
      }
    });
  }
}
