import { Component, Input } from '@angular/core';
import { Gig } from '../../gig.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-gig-item',
  templateUrl: './gig-item.component.html',
  styleUrls: ['./gig-item.component.css'],
  imports: [
    DatePipe
  ]
})
export class GigItemComponent {
  @Input() gig!: Gig;
}
