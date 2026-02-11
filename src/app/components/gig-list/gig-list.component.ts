import {Component, EventEmitter, Output} from '@angular/core';
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
      date: '2026-01-23', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 20, acts: ['Lost Sanctuary', 'Sundance'],
      flyerImg: '/gigPlakate/2026 01 23 Bremen Meisenfrei.jpg'
    },
    {
      date: '2025-12-22', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 20, acts: [],
      flyerImg: '/gigPlakate/'
    },
    {
      date: '2025-11-03', venue: 'Musikscheune', city: 'Worpswede',
      doors: '19:00', start: '20:00', price: 20, acts: [],
      flyerImg: '/gigPlakate/'
    },
    {
      date: '2025-09-12', venue: 'JUZ', city: 'Wittmund',
      doors: '19:30', start: '20:00', price: 10, acts: ['Sundance', 'Downfall'],
      flyerImg: '/gigPlakate/2025 09 12 Wittmund Juz.jpg'
    },
    {
      date: '2025-04-26', venue: 'Räucherei', city: 'Kiel',
      doors: '', start:'', price: 10, acts: [],
      flyerImg: '/gigPlakate/2025 04 26 Kiel Mosh Im Mai.jpg'
    },
    {
      date: '2025-03-21', venue: 'Minitour', city: 'Diverse',
      doors: '', start:'', price: 0, acts: [],
      flyerImg: '/gigPlakate/2025 03 XX Minitour.jpg'
    },
    {
      date: '2025-01-11', venue: 'Haus der Jugend', city: 'Bremerhaven',
      doors: '19:00', start:'20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2025 01 11 Bremerhaven Haus Der Jugend.jpg'
    },
    {
      date: '2024-12-14', venue: 'Zollkantine', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2024 12 14 Bremen Zollkantine.jpg'
    },
    {
      date: '2024-07-26', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2024 07 26 Bremen Meisenfrei.jpg'
    },
    {
      date: '2024-06-21', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2024 06 21 Bremen Meisenfrei.jpg'
    },
    {
      date: '2023-12-22', venue: 'Zollkantine', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2023 12 22 Bremen Zollkantine.jpg'
    },
    {
      date: '2023-11-04', venue: 'Szenerie', city: 'Leer',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2023 11 04 Leer Szenerie.jpg'
    },
    {
      date: '2023-07-29', venue: 'Zollkantine', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2023 07 29 Bremen Zollkantine.jpg'
    },
    {
      date: '2023-07-22', venue: 'Lauschbar', city: 'Itzehoe',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2023 07 22 Itzehoe Lauscbar.jpg'
    },
    {
      date: '2022-11-04', venue: 'Rare Guitar', city: 'Münster',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2022 11 04 Münster Rare Guitar.jpg'
    },
    {
      date: '2022-06-18', venue: 'Zollkantine', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/gigPlakate/2022 06 18 Bremen Zollkantine.jpg'
    },
    {
      date: '2022-03-26', venue: 'Lauschbar', city: 'Itzehoe',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      flyerImg: '/Gigplakate/2022 03 26 Itzehoe Lauschbar.jpg'
    },
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
