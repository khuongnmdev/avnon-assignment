import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from 'src/theme/material-module/material-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuestionDialogComponent } from './dialog/question-dialog/question-dialog.component';
import { FormAnswersComponent } from './form/form-answers/form-answers.component';
import { FormBuilderComponent } from './form/form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormAnswersComponent,
    QuestionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
