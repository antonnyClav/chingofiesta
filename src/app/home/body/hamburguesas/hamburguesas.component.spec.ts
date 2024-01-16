import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguesasComponent } from './hamburguesas.component';

describe('HamburguesasComponent', () => {
  let component: HamburguesasComponent;
  let fixture: ComponentFixture<HamburguesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburguesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburguesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
