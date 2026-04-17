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
      id: 22,title: '', date: '2026-01-23', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 0, acts: ['Lost Sanctuary', 'Sundance'],
      imageUrl: '/gigPlakate/2026 01 23 Bremen Meisenfrei.jpg'
    },
    {
      id: 21, title: '', date: '2025-12-22', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 0, acts: [],
      imageUrl: '/gigPlakate/'
    },
    {
      id: 20, title: '', date: '2025-11-03', venue: 'Musikscheune', city: 'Worpswede',
      doors: '19:00', start: '20:00', price: 10, acts: [],
      imageUrl: '/gigPlakate/'
    },
    {
      id: 19, title: 'Wittmund Tankt Metal', date: '2025-09-12', venue: 'JUZ', city: 'Wittmund',
      doors: '19:30', start: '20:00', price: 10, acts: ['Sundance', 'Downfall'],
      imageUrl: '/gigPlakate/2025 09 12 Wittmund Juz.jpg'
    },
    {
      id: 18, title: 'Mosh Im Mai', date: '2025-04-26', venue: 'Räucherei', city: 'Kiel',
      doors: '13:00', start:'13:30', price: 10, acts: ['Nekrobreaker', 'Eradicator', 'Phantom Corporation', 'Catbreath',
        'Celebrate The Bloodshed', 'Moshpitmaniax', 'Sordlich', 'Chaosbreed'],
      imageUrl: '/gigPlakate/2025 04 26 Kiel Mosh Im Mai.jpg'
    },
    {
      id: 17, title: 'Ancient Rites in Modern Times', date: '2025-03-29', venue: 'Schaubude', city: 'Kiel',
      doors: '', start:'', price: 0, acts: ['Brazing Bull', 'Wolves Of War'],
      imageUrl: '/gigPlakate/2025 03 XX Minitour.jpg'
    },
    {
      id: 16, title: 'Ancient Rites in Modern Times', date: '2025-03-28', venue: 'Bambi Galore', city: 'Hamburg',
      doors: '', start:'', price: 0, acts: ['Celebrate The Bloodshed', 'Brazing Bull', 'Wolves Of War'],
      imageUrl: '/gigPlakate/2025 03 XX Minitour.jpg'
    },
    {
      id: 15, title: 'Ancient Rites in Modern Times', date: '2025-03-22', venue: 'Landgasthof Wacken', city: 'Wacken',
      doors: '', start:'', price: 0, acts: ['Celebrate The Bloodshed', 'Brazing Bull', 'Wolves Of War'],
      imageUrl: '/gigPlakate/2025 03 XX Minitour.jpg'
    },
    {
      id: 14, title: 'Ancient Rites in Modern Times', date: '2025-03-21', venue: 'Bambi Galore', city: 'Hamburg',
      doors: '', start:'', price: 0, acts: ['Celebrate The Bloodshed', 'Brazing Bull', 'Wolves Of War'],
      imageUrl: '/gigPlakate/2025 03 XX Minitour.jpg'
    },
    {
      id: 13, title: 'Emperors Downfall', date: '2025-01-24', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start:'20:00', price: 0, acts: ['Lost Sanctuary', 'Reverend Hound'],
      imageUrl: '/gigPlakate/2025 03 XX Minitour.jpg'
    },
    {
      id: 12, title: 'Awaken The Kraken', date: '2025-01-11', venue: 'Haus der Jugend', city: 'Bremerhaven',
      doors: '19:00', start:'20:00', price: 10, acts: ['Paralyzed', 'Skyshaper','Woodhead'],
      imageUrl: '/gigPlakate/2025 01 11 Bremerhaven Haus Der Jugend.jpg'
    },
    {
      id: 11, title: 'Merry Fucking Christmas Inferno', date: '2024-12-14', venue: 'Zollkantine', city: 'Bremen',
      doors: '19:00', start:'20:00', price: 12, acts: ['Maintain', 'Oracle Hands'],
      imageUrl: '/gigPlakate/2024 12 14 Bremen Zollkantine.jpg'
    },
    {
      id: 10, title: 'Wacken Open Air Warm Up', date: '2024-07-26', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:00', start: '', price: 0, acts: ['Squealer', 'Unchained Horizon'],
      imageUrl: '/gigPlakate/2024 07 26 Bremen Meisenfrei.jpg'
    },
    {
      id: 9, title: 'Steel & Stone', date: '2024-06-21', venue: 'Meisenfrei', city: 'Bremen',
      doors: '19:30', start: '', price: 0, acts: ['Choke The Palm Tree'],
      imageUrl: '/gigPlakate/2024 07 26 Bremen Meisenfrei.jpg'
    },
    {
      id: 8, title: 'Carnage On Candlemas', date: '2024-02-02', venue: 'Meisenfrei', city: 'Bremen',
      doors: '20:00', start: '', price: 0, acts: ['Lost Sanctuary'],
      imageUrl: '/gigPlakate/2024 06 21 Bremen Meisenfrei.jpg'
    },
    {
      id: 7, title: 'Merry Fucking Christmas Inferno', date: '2023-12-22', venue: 'Zollkantine', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 12, acts: ['Machinefeeder'],
      imageUrl: '/gigPlakate/2023 12 22 Bremen Zollkantine.jpg'
    },
    {
      id: 6, title: '', date: '2023-11-04', venue: 'Szenerie', city: 'Leer',
      doors: '21:00', start: '', price: 0, acts: ['A Dying Home', 'Fall Of The Heathens'],
      imageUrl: '/gigPlakate/2023 11 04 Leer Szenerie.jpg'
    },
    {
      id: 5, title: 'Ritual', date: '2023-07-29', venue: 'Zollkantine', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 12, acts: ['Skyshaper', 'World Of Sickness'],
      imageUrl: '/gigPlakate/2023 07 29 Bremen Zollkantine.jpg'
    },
    {
      id: 4, title: 'A Midsummer Nights Nightmare', date: '2023-07-22', venue: 'Lauschbar', city: 'Itzehoe',
      doors: '19:00', start: '20:00', price: 12, acts: ['Eight Lives Down', 'Mind4ce'],
      imageUrl: '/gigPlakate/2023 07 22 Itzehoe Lauscbar.jpg'
    },
    {
      id: 3, title: '', date: '2022-11-04', venue: 'Rare Guitar Bar', city: 'Münster',
      doors: '18:00', start: '19:00', price: 10, acts: ['Lost Sanctuary', 'Eight Lives Down'],
      imageUrl: '/gigPlakate/2022 11 04 Münster Rare Guitar.jpg'
    },
    {
      id: 2, title: 'A New Beginning', date: '2022-06-18', venue: 'Zollkantine', city: 'Bremen',
      doors: '19:00', start: '20:00', price: 8, acts: ['Inhale The Void', 'Woodhead'],
      imageUrl: '/gigPlakate/2022 06 18 Bremen Zollkantine.jpg'
    },
    {
      id: 1, title: 'Dystopian Restart', date: '2022-03-26', venue: 'Lauschbar', city: 'Itzehoe',
      doors: '20:00', start: '', price: 8, acts: ['Bulldriver', 'Source of Rage'],
      imageUrl: '/gigPlakate/2022 03 26 Itzehoe Lauschbar.jpg'
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
