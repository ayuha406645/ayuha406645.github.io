import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModuleComponent } from "./pagination-module.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaginationModuleComponent
  ],
  exports: [
    PaginationModuleComponent
  ],
  schemas: [
    PaginationModuleComponent
  ]
})
export class PaginationModuleModule { }
