import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { QuestionType } from 'src/app/model/base-question';

const MAXIMUM_OPTIONS_LIMIT = 5;

export interface QuestionTypeOption {
  name: string;
  value: QuestionType;
}

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit {

  QuestionType = QuestionType;

  form: FormGroup;

  typeQuestions: QuestionTypeOption[] = [
    {
      name: QuestionType.Paragraph.toString(),
      value: QuestionType.Paragraph,
    },
    {
      name: QuestionType.Checkbox.toString(),
      value: QuestionType.Checkbox
    },
  ]

  constructor(
    public matDialogRef: MatDialogRef<QuestionDialogComponent>,
    private readonly formBuilder: FormBuilder,

  ) {
    this.form = this.initForm();
  }

  ngOnInit() {
  }

  onFormSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.matDialogRef.close({ data: this.form.value });
  }

  trackByType(index: number, item: QuestionTypeOption) {
    return index + item.name;
  }

  get optionsFormArray() {
    return this.form.get('options') as FormArray;
  }

  addNewOption() {
    const options = this.form.get('options') as FormArray;
    options.push(new FormControl('', Validators.required));
  }

  canAddNewOption() {
    return this.optionsFormArray.length < MAXIMUM_OPTIONS_LIMIT;
  }

  private initForm(): FormGroup {
    return new FormGroup({
      type: new FormControl(QuestionType.Paragraph, Validators.required),
      title: new FormControl('', Validators.required),
      isRequired: new FormControl(false),
      allowOtherOption: new FormControl(false),
      options: new FormArray([]),
    });
  }
}
