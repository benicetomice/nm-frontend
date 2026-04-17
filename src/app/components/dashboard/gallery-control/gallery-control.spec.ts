import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryControl } from './gallery-control';

describe('GalleryControl', () => {
  let component: GalleryControl;
  let fixture: ComponentFixture<GalleryControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
