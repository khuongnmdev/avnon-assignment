import { BaseQuestion, QuestionType } from "./base-question";

export interface CheckboxOption {
  name: string;
  value: QuestionType;
  isChecked: boolean;
}

export interface CheckboxQuestion extends BaseQuestion {
  value: CheckboxOption[];
  allowOtherOption: boolean;
}
