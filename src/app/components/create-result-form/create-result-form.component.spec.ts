import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResultFormComponent } from './create-result-form.component';

describe('CreateResultFormComponent', () => {
  let component: CreateResultFormComponent;
  let fixture: ComponentFixture<CreateResultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResultFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
