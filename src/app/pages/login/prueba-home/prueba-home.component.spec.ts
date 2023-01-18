import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaHomeComponent } from './prueba-home.component';

describe('PruebaHomeComponent', () => {
  let component: PruebaHomeComponent;
  let fixture: ComponentFixture<PruebaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
