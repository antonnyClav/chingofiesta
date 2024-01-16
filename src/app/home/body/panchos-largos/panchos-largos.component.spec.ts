import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchosLargosComponent } from './panchos-largos.component';

describe('SandwichsMigaComponent', () => {
  let component: PanchosLargosComponent;
  let fixture: ComponentFixture<PanchosLargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanchosLargosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanchosLargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
