import {Routes} from '@angular/router';
import {Home} from './pages/home/home.component';
import {Media} from './pages/media/media';
import {Live} from './pages/live/live';
import {Merch} from './pages/merch/merch';
import {Press} from './pages/press/press';
import {Contact} from './pages/contact/contact.component';
import {NotFound} from './pages/not-found/not-found';
import {Login} from './pages/login/login';
import {Dashboard} from './pages/dashboard/dashboard';
import {AuthGuard} from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: { title: 'Home', bgClass: 'bg-home' }
  },
  {
    path: 'media',
    component: Media,
    data: { title: 'Media', bgClass: 'bg-default' }
  },
  {
    path: 'live',
    component: Live,
    data: { title: 'Live', bgClass: 'bg-default' }
  },
  {
    path: 'merch',
    component: Merch,
    data: { title: 'Merch', bgClass: 'bg-default' }
  },
  {
    path: 'press',
    component: Press,
    data: { title: 'Press',bgClass: 'bg-default' }
  },
  {
    path: 'contact',
    component: Contact,
    data: { title: 'Contact',bgClass: 'bg-default' }
  },
  {
    path: 'login',
    component: Login,
    title: 'Login',
    data: { bgClass: 'bg-default' }
  },
  {
    path: 'dashboard',
    component: Dashboard,
    title: 'Dashboard',
    canActivate: [AuthGuard],
    data: { bgClass: 'bg-default' }
  },
  {
    path: '**',
    component: NotFound,
    data: { title: 'Page Not Found', bgClass: 'bg-default' }
  }
];
