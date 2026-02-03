import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Gig} from '../gig.model';
import {GigItemComponent} from './gig-item/gig-item.component';
import {GigItemOverview} from './gig-item-overview/gig-item-overview';

@Component({
  selector: 'app-gig-list',
  templateUrl: './gig-list.component.html',
  styleUrls: ['./gig-list.component.css'],
  imports: [
    GigItemComponent,
    GigItemOverview
  ]
})
export class GigListComponent {
  @Output() close = new EventEmitter<void>();

  gigs: Gig[] = [
    {
      date: '2026-12-26', venue: 'Logo', city: 'Hamburg',
      doors: '19:00', start: '20:00', price: 20, acts: [],
      flyerImg: ''
    },
    {
      date: '2026-01-23', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 20, acts: [],
      flyerImg: '/Gigplakate/2026 01 23 Bremen Meisenfrei.jpg'
    },
    {
      date: '2025-11-03', venue: 'Musikscheune', city: 'Worpswede',
      doors: '19:00', start: '20:00', price: 20, acts: [],
      flyerImg: ''
    },
    {
      date: '2025-12-22', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 20, acts: [],
      flyerImg: ''
    },
    {
      date: '2024-12-22', venue: 'Cadillack', city: 'Oldenburg',
      doors: '19:00', start: '20:00', price: 20, acts: [],
      flyerImg: ''
    },
    {
      date: '2024-12-05', venue: 'Musikscheune', city: 'Worpswede',
      doors: '19:00', start: '20:00', price: 20, acts: [],
      flyerImg: ''
    },
    {
      date: '2024-12-22', venue: 'Leer Open Air', city: 'Leer',
      doors: '19:00', start: '20:00', price: 20, acts: [],
      flyerImg: ''
    }
  ];

  today = new Date();
  selectedGig: Gig | null = null;

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

  openGig(gig: Gig) {
    this.selectedGig = gig;
  }

  closeGig() {
    this.selectedGig = null;
  }
}
