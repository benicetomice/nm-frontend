import {Routes} from '@angular/router';
import {Home} from './pages/home/home.component';
import {Media} from './pages/media/media';
import {Live} from './pages/live/live';
import {Merch} from './pages/merch/merch';
import {Press} from './pages/press/press';
import {Contact} from './pages/contact/contact.component';
import {NotFound} from './pages/not-found/not-found';
import {Login} from './pages/login/login';
import {Dashboard} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth-guard';
import {DashboardOverview} from './components/dashboard/dashboard-home/dashboard.component';
import {GigControl} from './components/dashboard/gig-control/gig-control.component';
import {GalleryControl} from './components/dashboard/gallery-control/gallery-control';

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
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: Dashboard,
    data: {title: 'Dashboard', bgClass: 'bg-default'},
    children: [
      {
        path: '',
        component: DashboardOverview,
        data: { title: 'Dashboard', bgClass: 'bg-default' }
      },
      {
        path: 'gigs',
        component: GigControl,
        data: { title: 'Gig Control', bgClass: 'bg-default' }
      },
      {
        path: 'gallery',
        component: GalleryControl,
        data: { title: 'Gallery Control', bgClass: 'bg-default' }
      }
    ]
  },
  {
    path: 'login',
    component: Login,
    data: {title: 'Login', bgClass: 'bg-default'}
  },
  {
    path: '**',
    component: NotFound,
    data: { title: 'Page Not Found', bgClass: 'bg-default' }
  }
];
