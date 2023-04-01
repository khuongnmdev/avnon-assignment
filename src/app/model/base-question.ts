export enum QuestionType {
  Paragraph,
  Checkbox,
}

export interface BaseQuestion {
  title: string;
  type: QuestionType;
  isRequired: boolean;
}
