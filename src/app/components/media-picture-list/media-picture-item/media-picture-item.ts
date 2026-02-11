import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Picture} from '../../picture.model';

@Component({
  selector: 'app-media-picture-item',
  imports: [],
  templateUrl: './media-picture-item.html',
  styleUrl: './media-picture-item.css',
})
export class MediaPictureItem {
  @Input() pic!: Picture;
  @Output() selected = new EventEmitter<Picture>();

  select() {
    this.selected.emit(this.pic);
  }
}
