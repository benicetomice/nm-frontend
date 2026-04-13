import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavMenu} from './components/nav-menu/nav-menu.component';
import {combineLatest, filter, Subject, takeUntil} from 'rxjs';
import {BurgerMenu} from './components/burger-menu/burger-menu';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NgClass} from '@angular/common';
import {SocialMedia} from './components/social-media/social-media';
import {AuthService} from './services/auth-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenu, BurgerMenu, NgClass, SocialMedia],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {

  title: string = '';
  isPhonePortrait = false;

  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private responsive: BreakpointObserver,
    private authService: AuthService) {
  }

  ngOnInit() {
    setInterval(() => {
      const token = localStorage.getItem('token');

      if (token && this.authService.isTokenExpired(token)) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    }, 60000);

    combineLatest([
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ),
      this.responsive.observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait,
      ])
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([_, result]) => {
        this.isPhonePortrait = result.matches;

        const data = this.getActiveRouteData();

        this.title = data['title'] || '';
        this.updateBackground(data);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getActiveRouteData() {
    let route = this.route;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data;
  }

  private updateBackground(data: { bgClass?: string }) {
      const bgClass = data['bgClass'];

    document.body.classList.remove(
      'bg-home',
      'bg-home-portrait',
      'bg-default',
      'bg-default-portrait'
    );

    if (bgClass) {
      const finalclass = this.isPhonePortrait
        ? `${bgClass}-portrait`
        : bgClass;

      document.body.classList.add(finalclass);
    }
  }
}
