import {Component} from '@angular/core';
import {AuthService} from '../../services/auth-service';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';

  constructor(private auth: AuthService,
              private router: Router
  ) {}

  onSubmit() {
    this.auth.login(this.username, this.password)
      .subscribe({
        next: (res: any) => {

          console.log('RES:', res);

          if (!res) {
            console.error('EMPTY RESPONSE');
            return;
          }

          localStorage.setItem('token', res.token);

          this.router.navigate(['/dashboard']);
        }
      });
  }
}
