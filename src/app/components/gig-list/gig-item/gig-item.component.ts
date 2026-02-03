import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Gig } from '../../gig.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-gig-item',
  templateUrl: './gig-item.component.html',
  styleUrls: ['./gig-item.component.css'],
  imports: [
    DatePipe,

  ]
})
export class GigItemComponent {

  @Input() gig!: Gig;
  @Output() selected = new EventEmitter<Gig>();

  select() {
    this.selected.emit(this.gig);
  }
}
