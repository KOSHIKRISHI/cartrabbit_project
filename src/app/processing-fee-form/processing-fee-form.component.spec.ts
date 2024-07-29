import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingFeeFormComponent } from './processing-fee-form.component';

describe('ProcessingFeeFormComponent', () => {
  let component: ProcessingFeeFormComponent;
  let fixture: ComponentFixture<ProcessingFeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingFeeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessingFeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
