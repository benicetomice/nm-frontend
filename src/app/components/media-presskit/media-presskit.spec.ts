import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPresskit } from './media-presskit';

describe('MediaPresskit', () => {
  let component: MediaPresskit;
  let fixture: ComponentFixture<MediaPresskit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPresskit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPresskit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
