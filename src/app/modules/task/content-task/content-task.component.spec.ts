import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTaskComponent } from './content-task.component';

describe('ContentTaskComponent', () => {
  let component: ContentTaskComponent;
  let fixture: ComponentFixture<ContentTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
