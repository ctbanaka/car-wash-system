import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWasherProfileComponent } from './update-washer-profile.component';

describe('UpdateWasherProfileComponent', () => {
  let component: UpdateWasherProfileComponent;
  let fixture: ComponentFixture<UpdateWasherProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWasherProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWasherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
