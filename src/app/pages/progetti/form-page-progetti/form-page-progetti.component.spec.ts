import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPageProgettiComponent } from './form-page-progetti.component';

describe('FormPageProgettiComponent', () => {
  let component: FormPageProgettiComponent;
  let fixture: ComponentFixture<FormPageProgettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPageProgettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPageProgettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
