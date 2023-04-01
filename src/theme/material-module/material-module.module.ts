import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL_MODULE = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule
]
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [...MATERIAL_MODULE],

})
export class MaterialModuleModule { }
