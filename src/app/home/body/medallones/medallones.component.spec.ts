import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedallonesComponent } from './medallones.component';

describe('FiambresQuesosComponent', () => {
  let component: MedallonesComponent;
  let fixture: ComponentFixture<MedallonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedallonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedallonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
