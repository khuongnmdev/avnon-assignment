import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit {

  constructor(
    public matDialogRef: MatDialogRef<QuestionDialogComponent>
  ) { }

  ngOnInit() {
  }

  saveQuestion() {
    this.matDialogRef.close({ data: 'test' });
  }
}
