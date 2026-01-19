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
      date: '2026-02-01',
      venue: 'Club X',
      city: 'Berlin'
    },
    {
      date: '2026-03-15',
      venue: 'Halle Y',
      city: 'Hamburg'
    }
  ];
}
