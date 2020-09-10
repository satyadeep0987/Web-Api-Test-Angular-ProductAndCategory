import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAndUpdateDeleteComponent } from './select-and-update-delete.component';

describe('SelectAndUpdateDeleteComponent', () => {
  let component: SelectAndUpdateDeleteComponent;
  let fixture: ComponentFixture<SelectAndUpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAndUpdateDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAndUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
