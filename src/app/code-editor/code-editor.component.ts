import {Component, ElementRef, Input, OnInit} from '@angular/core';
import * as editor from 'monaco-editor/esm/vs/editor/editor.api';
import 'monaco-editor/esm/vs/editor/browser/controller/coreCommands.js';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  edit: any;
  // @ViewChild('con') conDiv: ElementRef;
  node: HTMLElement;
  @Input() code: string;
  @Input() languages = 'json';
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.node = this.elementRef.nativeElement.querySelector('#container');
    console.log(this.node);
    this.edit = editor.editor.create(this.node, {
      value: JSON.stringify(this.code),
      language: this.languages,
      // formatOnType: true,
      // formatOnPaste: true,
      // wordWrap: 'wordWrapColumn',
      // wrappingIndent: 'indent',
      // wordWrapMinified: true,
    });
  }
  getEditValue() {
    const code = this.edit.getValue();
    console.log(code);
  }
  setEditValue() {
    this.edit.setValue('改变内容');
  }
}
