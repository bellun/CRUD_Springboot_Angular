import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePassageiroComponent } from './update-passageiro.component';

describe('UpdatePassageiroComponent', () => {
  let component: UpdatePassageiroComponent;
  let fixture: ComponentFixture<UpdatePassageiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePassageiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
