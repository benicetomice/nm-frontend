import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPictures } from './media-pictures';

describe('MediaPictures', () => {
  let component: MediaPictures;
  let fixture: ComponentFixture<MediaPictures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPictures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPictures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
