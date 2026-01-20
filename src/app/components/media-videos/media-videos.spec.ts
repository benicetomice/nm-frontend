import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaVideos } from './media-videos';

describe('MediaVideos', () => {
  let component: MediaVideos;
  let fixture: ComponentFixture<MediaVideos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaVideos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaVideos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
