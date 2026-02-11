import {Component} from '@angular/core';
import {MediaVideoList} from '../../components/media-video-list/media-video-list.component';
import {MediaPictureList} from '../../components/media-picture-list/media-picture-list.component';
import {MatTab, MatTabGroup} from '@angular/material/tabs';


@Component({
  selector: 'app-media',
  imports: [
    MediaVideoList,
    MediaPictureList,
    MatTabGroup,
    MatTab
  ],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {
}
