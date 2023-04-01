import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionDialogComponent } from 'src/app/dialog/question-dialog/question-dialog.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  async addQuestion() {
    console.log('addQuestion work');

    const value = await this.dialog.open(QuestionDialogComponent, {
      data: {
        animal: 'panda',
      },
    });

    console.log('addQuestion: ', value);

  }
}
