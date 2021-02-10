import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassageiroComponent } from './create-passageiro.component';

describe('CreatePassageiroComponent', () => {
  let component: CreatePassageiroComponent;
  let fixture: ComponentFixture<CreatePassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePassageiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
