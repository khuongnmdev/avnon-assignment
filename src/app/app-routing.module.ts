import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './components/form/form-builder/form-builder.component';
import { FormAnswersComponent } from './components/form/form-answers/form-answers.component';

const routes: Routes = [
  {
    path: 'form',
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'builder' },
      {
        path: 'builder',
        component: FormBuilderComponent,
      },
      {
        path: 'answer',
        component: FormAnswersComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: 'form/builder',
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
