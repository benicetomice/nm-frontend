import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPictureItem } from './media-picture-item';

describe('MediaPictureItem', () => {
  let component: MediaPictureItem;
  let fixture: ComponentFixture<MediaPictureItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPictureItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPictureItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
