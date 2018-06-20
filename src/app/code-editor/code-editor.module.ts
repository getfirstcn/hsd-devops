import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CodeEditorComponent],
  declarations: [CodeEditorComponent]
})
export class CodeEditorModule { }
