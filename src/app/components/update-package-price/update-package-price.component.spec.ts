import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackagePriceComponent } from './update-package-price.component';

describe('UpdatePackagePriceComponent', () => {
  let component: UpdatePackagePriceComponent;
  let fixture: ComponentFixture<UpdatePackagePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePackagePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePackagePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
