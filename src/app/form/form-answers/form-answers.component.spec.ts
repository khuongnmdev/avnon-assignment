/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormAnswersComponent } from './form-answers.component';

describe('FormAnswersComponent', () => {
  let component: FormAnswersComponent;
  let fixture: ComponentFixture<FormAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
