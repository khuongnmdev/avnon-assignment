import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from 'src/theme/material-module/material-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './components/form/form-builder/form-builder.component';
import { FormAnswersComponent } from './components/form/form-answers/form-answers.component';
import { QuestionDialogComponent } from './components/dialog/question-dialog/question-dialog.component';

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
