import {Component} from '@angular/core';
import {FormControl, FormsModule, Validators} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  model = {
    name: '',
    email: '',
    message: ''
  };

  status: 'success' | 'error' | null = null;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  onSubmit() {
    this.http.post('http://localhost:8080/api/contact', this.model)
      .subscribe({
        next: () => {
          this.snackBar.open('Nachricht gesendet', 'OK', {
            duration: 3000
          });
        },
        error: () => {
          this.snackBar.open('Fehler beim Senden', 'OK', {
            duration: 4000
          });
        }
      });
  }
}
