import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroDetailsComponent } from './passageiro-details.component';

describe('PassageiroDetailsComponent', () => {
  let component: PassageiroDetailsComponent;
  let fixture: ComponentFixture<PassageiroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassageiroDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageiroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
