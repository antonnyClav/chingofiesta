import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchosComponent } from './panchos.component';

describe('PanchosComponent', () => {
  let component: PanchosComponent;
  let fixture: ComponentFixture<PanchosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanchosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanchosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
