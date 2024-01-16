import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasCongeladosComponent } from './bebidas-congelados.component';

describe('BebidasCongeladosComponent', () => {
  let component: BebidasCongeladosComponent;
  let fixture: ComponentFixture<BebidasCongeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidasCongeladosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidasCongeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
