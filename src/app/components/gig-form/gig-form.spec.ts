import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigForm } from './gig-form';

describe('GigForm', () => {
  let component: GigForm;
  let fixture: ComponentFixture<GigForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
