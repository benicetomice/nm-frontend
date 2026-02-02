import {Component} from '@angular/core';
import {MediaVideos} from '../../components/media-videos/media-videos';
import {Tab, Tabs, TabList, TabPanel, TabContent} from '@angular/aria/tabs';
import {MediaPictures} from '../../components/media-pictures/media-pictures';


@Component({
  selector: 'app-media',
  imports: [
    MediaVideos,
    TabList,
    Tab,
    Tabs,
    TabPanel,
    TabContent,
    MediaPictures
  ],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {
}
