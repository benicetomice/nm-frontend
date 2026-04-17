import { Component } from '@angular/core';
import {Gig} from '../../gig.model';
import {GigService} from '../../../services/GigService';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GigForm} from '../../gig-form/gig-form';

@Component({
  selector: 'app-admin',
  imports: [
    DatePipe,
    FormsModule,
    GigForm
  ],
  templateUrl: './gig-control.component.html',
  styleUrl: './gig-control.component.css',
})
export class GigControl {

  gigs: Gig[] = [];
  isModalOpen = false;
  selectedGig?: Gig;

  constructor(private gigService: GigService) {}

  ngOnInit() {
    this.loadGigs();
  }

  loadGigs() {
    this.gigService.getAll().subscribe({
      next: data => {
        this.gigs = data.sort((a, b,) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      },
      error: (err) => {
        console.error('ERROR LOADING GIGS', err);
      }
    });
  }

  createGig() {
    this.selectedGig = undefined;
    this.isModalOpen = true;
  }

  editGig(gig: Gig) {
    this.selectedGig = { ...gig };
    this.isModalOpen = true;
  }

  saveGig(gig: Gig) {
    if (gig.id) {
      this.gigService.update(gig.id, gig).subscribe(() => this.loadGigs());
    } else {
      this.gigService.create(gig).subscribe(() => this.loadGigs());
    }

    this.isModalOpen = false;
  }

  delete(id: number) {
    this.gigService.delete(id).subscribe(() => this.loadGigs());
  }
}
