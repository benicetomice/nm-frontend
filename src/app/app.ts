import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Footer} from './components/footer/footer';
import {filter} from 'rxjs';
import {BurgerMenu} from './components/burger-menu/burger-menu';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer, BurgerMenu, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  isPhonePortrait = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private responsive: BreakpointObserver) {

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

  ngOnInit() {

    this.responsive.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
    ])
      .subscribe(result => {

        this.isPhonePortrait = false;

        if (result.matches) {
          this.isPhonePortrait = true;
        }
      });
  }

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    return route.firstChild
      ? this.getDeepestRoute(route.firstChild)
      : route;
  }
}
