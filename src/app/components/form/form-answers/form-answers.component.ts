import { Component, OnInit } from '@angular/core';
import { QuestionType } from 'src/app/model/base-question';
import { CheckboxOption } from 'src/app/model/checkbox-question';
import { FormService } from 'src/app/services/form.service';
import { CheckboxSubmitQuestion, QuestionSubmitType } from '../form-builder/form-builder.component';

@Component({
  selector: 'app-form-answers',
  templateUrl: './form-answers.component.html',
  styleUrls: ['./form-answers.component.css']
})
export class FormAnswersComponent implements OnInit {

  QuestionType = QuestionType;

  constructor(
    protected readonly formService: FormService
  ) { }

  ngOnInit() {
  }

  isCheckboxQuestion(data: QuestionSubmitType) {
    if (data.type === QuestionType.Checkbox) {
      return <CheckboxSubmitQuestion>data;;
    }
    return undefined;
  }

  isChecked(option: CheckboxOption): boolean {
    return option.isChecked;
  }

}
