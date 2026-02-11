import {Component} from '@angular/core';
import {Picture} from '../picture.model';
import {MediaPictureItem} from './media-picture-item/media-picture-item';
import {MediaPictureView} from './media-picture-view/media-picture-view';

@Component({
  selector: 'app-media-pictures',
  imports: [
    MediaPictureItem,
    MediaPictureView
  ],
  templateUrl: './media-picture-list.component.html',
  styleUrl: './media-picture-list.component.css',
})
export class MediaPictureList {

  pics: Picture[] = [
    {
      id: 1, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (2).jpg',
      photographer: ''
    }, {
      id: 2, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (29).jpg',
      photographer: ''
    }, {
      id: 3, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (33).jpg',
      photographer: ''
    }, {
      id: 4, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (39).jpg',
      photographer: ''
    }, {
      id: 5, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (40).jpg',
      photographer: ''
    }, {
      id: 6, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (41).jpg',
      photographer: ''
    }, {
      id: 7, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (47).jpg',
      photographer: ''
    }, {
      id: 8, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (48).jpg',
      photographer: ''
    }, {
      id: 9, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (73).jpg',
      photographer: ''
    }, {
      id: 10, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (79).jpg',
      photographer: ''
    }, {
      id: 11, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (85).jpg',
      photographer: ''
    }, {
      id: 12, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (90).jpg',
      photographer: ''
    }, {
      id: 13, name: '2021 08 25 Bremen Überseefestival', img: '2021 08 25 Bremen Überseefestival (93).jpg',
      photographer: ''
    }, {
      id: 14, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (2).jpg',
      photographer: ''
    }, {
      id: 15, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (3).jpg',
      photographer: ''
    }, {
      id: 16, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (4).jpg',
      photographer: ''
    }, {
      id: 17, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (6).jpg',
      photographer: ''
    }, {
      id: 18, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (7).jpg',
      photographer: ''
    }, {
      id: 19, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (8).jpg',
      photographer: ''
    }, {
      id: 20, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (9).jpg',
      photographer: ''
    }, {
      id: 21, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (14).jpg',
      photographer: ''
    },{
      id: 23, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (15).jpg',
      photographer: ''
    }, {
      id: 24, name: '2023 07 29 Bremen Zollkantine', img: '2023 07 29 Bremen Zollkantine (18).jpg',
      photographer: ''
    }, {
      id: 25, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (1).jpg',
      photographer: ''
    }, {
      id: 26, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (2).jpg',
      photographer: ''
    }, {
      id: 27, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (3).jpg',
      photographer: ''
    }, {
      id: 28, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (7).jpg',
      photographer: ''
    }, {
      id: 29, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (8).jpg',
      photographer: ''
    }, {
      id: 30, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (9).jpg',
      photographer: ''
    }, {
      id: 31, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (10).jpg',
      photographer: ''
    }, {
      id: 32, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (11).jpg',
      photographer: ''
    }, {
      id: 33, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (13).jpg',
      photographer: ''
    },
    {
      id: 34, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (14).jpg',
      photographer: ''
    },
    {
      id: 35, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (15).jpg',
      photographer: ''
    },
    {
      id: 36, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (17).jpg',
      photographer: ''
    },
    {
      id: 37, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (18).jpg',
      photographer: ''
    },
    {
      id: 38, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (19).jpg',
      photographer: ''
    },
    {
      id: 39, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (23).jpg',
      photographer: ''
    },
    {
      id: 40, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (28).jpg',
      photographer: ''
    },
    {
      id: 41, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (32).jpg',
      photographer: ''
    },
    {
      id: 42, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (36).jpg',
      photographer: ''
    },
    {
      id: 43, name: '2025 01 11 Bremerhaven Haus der Jugend', img: '2025 01 11 Bremerhaven Haus der Jugend (37).jpg',
      photographer: ''
    },
    {
      id: 44, name: '2025 01 24 Bremen Meisenfrei', img: '2025 01 24 Bremen Meisenfrei (1).jpg',
      photographer: ''
    },
    {
      id: 45, name: '2025 01 24 Bremen Meisenfrei', img: '2025 01 24 Bremen Meisenfrei (2).jpg',
      photographer: ''
    },
    {
      id: 46, name: '2025 01 24 Bremen Meisenfrei', img: '2025 01 24 Bremen Meisenfrei (4).jpg',
      photographer: ''
    },
    {
      id: 47, name: '2025 03 29 Hamburg Bambi Galore', img: '2025 03 29 Hamburg Bambi Galore (2).jpg',
      photographer: ''
    },
    {
      id: 48, name: '2025 03 29 Hamburg Bambi Galore', img: '2025 03 29 Hamburg Bambi Galore (3).jpg',
      photographer: ''
    },
    {
      id: 49, name: '2025 03 29 Hamburg Bambi Galore', img: '2025 03 29 Hamburg Bambi Galore (5).jpg',
      photographer: ''
    },
    {
      id: 50, name: '2025 03 29 Hamburg Bambi Galore', img: '2025 03 29 Hamburg Bambi Galore (6).jpg',
      photographer: ''
    },
    {
      id: 51, name: '2025 03 29 Hamburg Bambi Galore', img: '2025 03 29 Hamburg Bambi Galore (8).jpg',
      photographer: ''
    },
    {
      id: 52, name: '2025 03 29 Hamburg Bambi Galore', img: '2025 03 29 Hamburg Bambi Galore (9).jpg',
      photographer: ''
    },
    {
      id: 53, name: '2025 03 29 Hamburg Bambi Galore', img: '2025 03 29 Hamburg Bambi Galore (10).jpg',
      photographer: ''
    },
    {
      id: 54, name: '2025 03 29 Hamburg Bambi Galore', img: '2025 03 29 Hamburg Bambi Galore (11).jpg',
      photographer: ''
    },
    {
      id: 55, name: '2025 03 30 Kiel Schaubude', img: '2025 03 30 Kiel Schaubude (1).jpg',
      photographer: ''
    },
    {
      id: 56, name: '2025 03 30 Kiel Schaubude', img: '2025 03 30 Kiel Schaubude (10).jpg',
      photographer: ''
    },
    {
      id: 57, name: '2025 03 30 Kiel Schaubude', img: '2025 03 30 Kiel Schaubude (12).jpg',
      photographer: ''
    },
    {
      id: 58, name: '2025 03 30 Kiel Schaubude', img: '2025 03 30 Kiel Schaubude (19).jpg',
      photographer: ''
    },
    {
      id: 59, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (1).jpg',
      photographer: ''
    },
    {
      id: 60, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (2).jpg',
      photographer: ''
    },
    {
      id: 61, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (3).jpg',
      photographer: ''
    },
    {
      id: 62, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (4).jpg',
      photographer: ''
    },
    {
      id: 63, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (6).jpg',
      photographer: ''
    },
    {
      id: 64, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (7).jpg',
      photographer: ''
    },
    {
      id: 65, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (8).jpg',
      photographer: ''
    },
    {
      id: 66, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (9).jpg',
      photographer: ''
    },
    {
      id: 67, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (10).jpg',
      photographer: ''
    },
    {
      id: 68, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (11).jpg',
      photographer: ''
    },
    {
      id: 69, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (12).jpg',
      photographer: ''
    },
    {
      id: 70, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (19).jpg',
      photographer: ''
    },
    {
      id: 71, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (26).jpg',
      photographer: ''
    },
    {
      id: 72, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (28).jpg',
      photographer: ''
    },
    {
      id: 73, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (31).jpg',
      photographer: ''
    },
    {
      id: 74, name: '2025 04 26 Kiel Mosh Im Mai', img: '2025 04 26 Kiel Mosh Im Mai (32).jpg',
      photographer: ''
    }
  ]

  selectedPic: Picture | null = null;

  get gigPictures(): Picture[] {
    return this.pics
  }

  openPicture(pic: Picture) {
    this.selectedPic = pic;
  }

  closePicture() {
    this.selectedPic = null;
  }
}
