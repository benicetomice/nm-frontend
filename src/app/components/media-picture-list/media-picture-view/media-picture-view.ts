import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Picture} from '../../picture.model';

@Component({
  selector: 'app-media-picture-view',
  imports: [],
  templateUrl: './media-picture-view.html',
  styleUrl: './media-picture-view.css',
})
export class MediaPictureView {
  @Input() pic!: Picture;
  @Output() close = new EventEmitter<void>();
}
