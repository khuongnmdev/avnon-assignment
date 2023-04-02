import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuestionSubmitType } from '../components/form/form-builder/form-builder.component';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _formData: BehaviorSubject<QuestionSubmitType[] | null>;

  public formData: Observable<QuestionSubmitType[] | null>;

  constructor() {

    this._formData = new BehaviorSubject<QuestionSubmitType[] | null>(null);
    this.formData = this._formData.asObservable();
  }

  saveForm(data: QuestionSubmitType[]) {
    this._formData.next(data);
  }
}
