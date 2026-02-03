import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigItemOverview } from './gig-item-overview';

describe('GigItemOverview', () => {
  let component: GigItemOverview;
  let fixture: ComponentFixture<GigItemOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigItemOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigItemOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
