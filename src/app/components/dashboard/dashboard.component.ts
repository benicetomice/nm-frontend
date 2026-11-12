import {Component} from '@angular/core';
import {GigService} from '../../services/GigService';
import {Gig} from '../gig.model';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from '../../services/auth-service'

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class Dashboard {

  gigs: Gig[] = [];

  constructor(private gigService: GigService, private auth: AuthService, private router: Router) {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
