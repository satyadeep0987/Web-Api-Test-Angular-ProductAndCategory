import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProdectsComponent } from './show-all-prodects.component';

describe('ShowAllProdectsComponent', () => {
  let component: ShowAllProdectsComponent;
  let fixture: ComponentFixture<ShowAllProdectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllProdectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllProdectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
