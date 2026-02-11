import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPictureView } from './media-picture-view';

describe('MediaPictureView', () => {
  let component: MediaPictureView;
  let fixture: ComponentFixture<MediaPictureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPictureView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPictureView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
