import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Gig } from '../../gig.model';

@Component({
  selector: 'app-gig-item-overview',
  standalone: true,
  templateUrl: './gig-item-overview.html',
  styleUrls: ['./gig-item-overview.css'],
})
export class GigItemOverview {
  @Input() gig!: Gig;
  @Output() close = new EventEmitter<void>();
}
