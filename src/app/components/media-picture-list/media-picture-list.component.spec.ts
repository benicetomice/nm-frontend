import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPictureList } from './media-picture-list.component';

describe('MediaPictures', () => {
  let component: MediaPictureList;
  let fixture: ComponentFixture<MediaPictureList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPictureList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPictureList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
