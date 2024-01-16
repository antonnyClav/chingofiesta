import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCumpleComponent } from './promo-cumple.component';

describe('PromoCumpleComponent', () => {
  let component: PromoCumpleComponent;
  let fixture: ComponentFixture<PromoCumpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoCumpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoCumpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
