import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {FileService} from './file-service';

@Component({
  selector: 'app-media-presskit',
  imports: [
    MatButton
  ],
  templateUrl: './media-presskit.html',
  styleUrl: './media-presskit.css',
})
export class MediaPresskit {

  constructor(private fileService: FileService) {
  }

  downloads = {
    fullPressKit: {
      url: 'downloads/fullPressKit.zip',
      name: 'fullPressKit',
    },
    bandLogo: {
      url: 'downloads/bandLogo.zip',
      name: 'bandLogo',
    },
    bandPictures: {
      url: 'downloads/bandPictures.zip',
      name: 'bandPictures',
    },
    biography: {
      url: 'downloads/biography.zip',
      name: 'biography',
    },
    stageAndTechrider: {
      url: 'downloads/stageAndTechrider.zip',
      name: 'stageAndTechrider',
    }
  }

  download(key: keyof typeof this.downloads) {
    const file = this.downloads[key];

    this.fileService.downloadFile(file.url).subscribe((downloadedFile) => {
      const downloadLink = document.createElement('a');
      const objectUrl = URL.createObjectURL(downloadedFile);

      downloadLink.href = objectUrl;
      downloadLink.download = file.name;
      downloadLink.click();

      URL.revokeObjectURL(objectUrl);
    })
  }

}
