import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgettiComponent } from './form-progetti.component';

describe('FormProgettiComponent', () => {
  let component: FormProgettiComponent;
  let fixture: ComponentFixture<FormProgettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProgettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProgettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
