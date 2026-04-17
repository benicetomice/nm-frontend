import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigControl } from './gig-control.component';

describe('GigControl', () => {
  let component: GigControl;
  let fixture: ComponentFixture<GigControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
