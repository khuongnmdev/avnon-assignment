import { BaseQuestion, QuestionType } from "./base-question";

export interface CheckboxOption {
  name: string;
  isChecked: boolean;
}

export interface CheckboxQuestion extends BaseQuestion {
  options: string[];
  allowOtherOption: boolean;
  value?: CheckboxOption[];
  otherValue?: string;
}
