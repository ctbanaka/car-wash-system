import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeWasherComponent } from './become-washer.component';

describe('BecomeWasherComponent', () => {
  let component: BecomeWasherComponent;
  let fixture: ComponentFixture<BecomeWasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeWasherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeWasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
