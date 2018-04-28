import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})
export class MonacoEditorComponent implements OnInit {

  constructor() { }
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code = 'function x() {\nconsole.log("Hello world!");\n}';
  data = 'Date: 2018-04-28T02:57:29.087Z - Hash: 2527e3a3154fdd80fa66 - Time: 633ms\n';

  ngOnInit() {
  }
  setcode(code: string) {
    this.code = code;
  }

}
