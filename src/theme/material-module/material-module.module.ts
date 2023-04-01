import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
const MATERIAL_MODULE = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule
]
@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULE,
  ],
  exports: [...MATERIAL_MODULE],

})
export class MaterialModuleModule { }
