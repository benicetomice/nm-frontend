import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Gig } from '../../gig.model';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-gig-item-overview',
  standalone: true,
  templateUrl: './gig-item-overview.html',
  styleUrls: ['./gig-item-overview.css'],
})
export class GigItemOverview implements OnInit{
  @Input() gig!: Gig;
  @Output() close = new EventEmitter<void>();

  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {

    this.responsive.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
    ])
      .subscribe(result => {

        this.isPhonePortrait = false;

        if (result.matches) {
          this.isPhonePortrait = true;
        }
      });
  }
}
