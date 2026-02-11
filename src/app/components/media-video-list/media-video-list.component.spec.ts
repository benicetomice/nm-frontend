import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaVideoList } from './media-video-list.component';

describe('MediaVideos', () => {
  let component: MediaVideoList;
  let fixture: ComponentFixture<MediaVideoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaVideoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaVideoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
