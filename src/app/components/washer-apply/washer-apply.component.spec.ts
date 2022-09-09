import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherApplyComponent } from './washer-apply.component';

describe('WasherApplyComponent', () => {
  let component: WasherApplyComponent;
  let fixture: ComponentFixture<WasherApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherApplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasherApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
