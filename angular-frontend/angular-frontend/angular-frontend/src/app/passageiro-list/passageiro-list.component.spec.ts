import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroListComponent } from './passageiro-list.component';

describe('PassageiroListComponent', () => {
  let component: PassageiroListComponent;
  let fixture: ComponentFixture<PassageiroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassageiroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageiroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
