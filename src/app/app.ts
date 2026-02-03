import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Footer} from './components/footer/footer';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const activateRoute = this.getDeepestRoute(this.route);
        const bgClass = activateRoute.snapshot.data['bgClass'];

        document.body.classList.remove('bg-home','bg-default');

        if (bgClass) {
          document.body.classList.add(bgClass);
        }
      });
  }

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    return route.firstChild
      ? this.getDeepestRoute(route.firstChild)
      : route;
  }
}
