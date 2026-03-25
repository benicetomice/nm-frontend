import {Component, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {FileService} from './file-service';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';

@Component({
  selector: 'app-media-presskit',
  imports: [
    MatButton,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
  ],
  templateUrl: './media-presskit.html',
  styleUrl: './media-presskit.css',
})
export class MediaPresskit {

  constructor(private fileService: FileService) {
  }

  readonly panelOpenState = signal(false);

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
