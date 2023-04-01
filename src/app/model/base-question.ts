export enum QuestionType {
  Paragraph = 'Paragraph',
  Checkbox = 'Checkbox',
}

export interface BaseQuestion {
  title: string;
  type: QuestionType;
  isRequired: boolean;
}
