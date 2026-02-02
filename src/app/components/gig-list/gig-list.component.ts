import { Component } from '@angular/core';
import { Gig } from '../gig.model';
import {GigItemComponent} from './gig-item/gig-item.component';

@Component({
  selector: 'app-gig-list',
  templateUrl: './gig-list.component.html',
  styleUrls: ['./gig-list.component.css'],
  imports: [
    GigItemComponent
  ]
})
export class GigListComponent {

  gigs: Gig[] = [
    { date: '2026-12-26', venue: 'Logo', city: 'Hamburg',
      gigDoors:'19:00', gigBegin:'20:00', price: 20, acts: [],
      flyerImg: '' },
    { date: '2026-01-23', venue: 'Meisenfrei', city: 'Bremen',
      gigDoors:'19:00', gigBegin:'20:00', price: 20, acts: [],
      flyerImg: '' },
    { date: '2025-11-03', venue: 'Musikscheune', city: 'Worpswede',
      gigDoors:'19:00', gigBegin:'20:00', price: 20, acts: [],
      flyerImg: '' },
    { date: '2025-12-22', venue: 'Meisenfrei', city: 'Bremen',
      gigDoors:'19:00', gigBegin:'20:00', price: 20, acts: [],
      flyerImg: '' },
    { date: '2024-12-22', venue: 'Cadillack', city: 'Oldenburg',
      gigDoors:'19:00', gigBegin:'20:00', price: 20, acts: [],
      flyerImg: '' },
    { date: '2024-12-05', venue: 'Musikscheune', city: 'Worpswede',
      gigDoors:'19:00', gigBegin:'20:00', price: 20, acts: [],
      flyerImg: '' },
    { date: '2024-12-22', venue: 'Leer Open Air', city: 'Leer',
      gigDoors:'19:00', gigBegin:'20:00', price: 20, acts: [],
      flyerImg: '' }
  ];

  today = new Date();

  get upcomingGigs(): Gig[] {
    return this.gigs
      .filter(g => new Date(g.date) >= this.today)
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  get pastGigs(): Gig[] {
    return this.gigs
      .filter(g => new Date(g.date) < this.today)
      .sort((a, b) => b.date.localeCompare(a.date));
  }
}
