import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWashersComponent } from './all-washers.component';

describe('AllWashersComponent', () => {
  let component: AllWashersComponent;
  let fixture: ComponentFixture<AllWashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWashersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
