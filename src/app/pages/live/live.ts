import { Component } from '@angular/core';
import { GigOverview } from '../../components/gig-overview/gig-overview';
import { Gig } from '../../components/gig.model';

@Component({
  selector: 'app-live',
  imports: [
    GigOverview
  ],
  templateUrl: './live.html',
  styleUrl: './live.css',
})
export class Live {
  gigs: Gig[] = [
    {
      date: '03-11-2025',
      venue: 'Musikscheune',
      city: 'Worpswede'
    },
    {
      date: '22-12-2025',
      venue: 'Meisenfrei',
      city: 'Bremen'
    },
    {
      date: '22-12-2024',
      venue:'Cadillack',
      city: 'Oldenburg'
    },
    {
      date: '05-12-2024',
      venue:'Musikscheune',
      city: 'Worpswede'
    },
    {
      date: '22-12-2024',
      venue:'Leer Open Air',
      city: 'Leer'
    }
  ];
}
