import { BaseQuestion, QuestionType } from "./base-question";

interface CheckboxOption {
  title: string;
  value: QuestionType;
  isChecked: boolean;
}

export interface CheckboxQuestion extends BaseQuestion {
  value: CheckboxOption[];
  allowOtherOption: boolean;
}
