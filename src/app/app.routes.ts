import { Routes } from '@angular/router';
import {Home} from './pages/home/home.component';
import {Media} from './pages/media/media';
import {Live} from './pages/live/live';
import {Merch} from './pages/merch/merch';
import {Press} from './pages/press/press';
import {Contact} from './pages/contact/contact.component';
import {NotFound} from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home',
    data: { bgClass: 'bg-home' }
  },
  {
    path: 'media',
    component: Media,
    title: 'Media',
    data: { bgClass: 'bg-default' }
  },
  {
    path: 'live',
    component: Live,
    title: 'Live',
    data: { bgClass: 'bg-default' }
  },
  {
    path: 'merch',
    component: Merch,
    title: 'Merch',
    data: { bgClass: 'bg-default' }
  },
  {
    path: 'press',
    component: Press,
    title: 'Press',
    data: { bgClass: 'bg-default' }
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact',
    data: { bgClass: 'bg-default' }
  },
  {
    path: '**',
    component: NotFound,
    title: 'Page Not Found',
    data: { bgClass: 'bg-default' }
  }
];
