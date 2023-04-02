import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { QuestionType } from 'src/app/model/base-question';
import { ParagraphQuestion } from 'src/app/model/paragraph-question';
import { FormService } from 'src/app/services/form.service';
import { CheckboxOption, CheckboxQuestion } from '../../../model/checkbox-question';
import { QuestionDialogComponent } from '../../dialog/question-dialog/question-dialog.component';

export type QuestionCreationType = CheckboxQuestion | ParagraphQuestion;

export type CheckboxSubmitQuestion = Omit<CheckboxQuestion, 'options'> & { options: CheckboxOption[] }

export type QuestionSubmitType = CheckboxSubmitQuestion | ParagraphQuestion;


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  QuestionType = QuestionType;

  form: FormGroup;

  constructor(
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly formService: FormService
  ) {
    this.form = this.initForm();
  }

  ngOnInit() {
    this.formService.formData.pipe(
      first(),
    ).subscribe((data) => {
      if (data) {
        const questions = this.form.get('questions') as FormArray;
        data.forEach(form => {
          questions.push(this.loadExitedForm(form));
        })
      }
    })
  }

  get questionsFormArray() {
    return this.form.get('questions') as FormArray;
  }

  addQuestion() {
    const dialogRef = this.dialog.open(QuestionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadNewQuestion(result.data);
    });
  }

  loadNewQuestion(questionData: QuestionCreationType) {
    const questions = this.form.get('questions') as FormArray;
    questions.push(this.createFormGroup(questionData));
  }

  createFormGroup(questionData: QuestionCreationType) {
    if (questionData.type === QuestionType.Checkbox) {
      const checkboxData = <CheckboxQuestion>questionData;

      const initValues = checkboxData.options.map(option => {
        const obj: CheckboxOption = {
          name: option,
          isChecked: false,
        }
        return obj;
      })

      return new FormGroup({
        title: new FormControl(checkboxData.title),
        type: new FormControl(checkboxData.type, Validators.required),
        isRequired: new FormControl(checkboxData.isRequired),
        value: new FormControl('', questionData.isRequired ? Validators.required : []),
        options: new FormControl(initValues),
        allowOtherOption: new FormControl(checkboxData.allowOtherOption),
        otherValue: new FormControl(''),
      });
    }
    return new FormGroup({
      title: new FormControl(questionData.title),
      type: new FormControl(questionData.type, Validators.required),
      isRequired: new FormControl(questionData.isRequired),
      value: new FormControl('', questionData.isRequired ? Validators.required : []),
    });
  }

  loadExitedForm(questionData: QuestionSubmitType) {
    if (questionData.type === QuestionType.Checkbox) {
      const checkboxData = <CheckboxSubmitQuestion>questionData;
      return new FormGroup({
        title: new FormControl(checkboxData.title),
        type: new FormControl(checkboxData.type, Validators.required),
        isRequired: new FormControl(checkboxData.isRequired),
        value: new FormControl('', questionData.isRequired ? Validators.required : []),
        options: new FormControl(checkboxData.options),
        allowOtherOption: new FormControl(checkboxData.allowOtherOption),
        otherValue: new FormControl(''),
      });
    }
    return new FormGroup({
      title: new FormControl(questionData.title),
      type: new FormControl(questionData.type, Validators.required),
      isRequired: new FormControl(questionData.isRequired),
      value: new FormControl('', questionData.isRequired ? Validators.required : []),
    });

  }

  onFormSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const formData: QuestionSubmitType[] = this.form.value.questions;
    this.formService.saveForm(formData);
    this.router.navigate(['form', 'answer']);
  }

  onToggle(event: MatCheckboxChange, option: CheckboxOption, control: AbstractControl) {
    option.isChecked = event.checked;
    this.patchValue(control);
  }

  onOtherChange(control: AbstractControl) {
    this.patchValue(control);
  }

  patchValue(control: AbstractControl) {
    // parse current checked options and other value to value field for validator
    const optionValues = control.value.options
      .filter((opt: CheckboxOption) => opt.isChecked)
      .map((opt: CheckboxOption) => opt.name)
      .join('');

    const otherValue = control.value.otherValue;
    control.patchValue({ value: optionValues + otherValue });
  }

  private initForm(): FormGroup {
    return new FormGroup({
      questions: new FormArray([]),
    });
  }
}
