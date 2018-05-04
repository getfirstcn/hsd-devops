import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import {MatDialog} from '@angular/material';
// import {PodComponent} from '../pod.component';
import {PodService} from '../pod.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
  providers: [PodService]
})
export class LogComponent implements OnInit {
  text = '手写数据';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Data,
    private pod: PodService,
    private route: ActivatedRoute) {
  }
  editorOptions = {theme: 'vs-dark', language: 'json'};
  code = this.data.log;
  // setData(data: string) {
  //   console.log('收到父组件消息', data);
  //   this.code = data;
  // }
  flushLog() {
    this.pod.getLog(this.data.namespace, this.data.name)
      .subscribe(data => {
          console.log('组件收到日志', data);
          // this.logComponent.data = data;
        },
        error => {
          console.log('e组件收到日志', error.error.text);
          this.code = error.error.text;
        });
  }

ngOnInit() {
  //   const namespace = this.route.snapshot.paramMap.get('namespace');
  //   const name = this.route.snapshot.paramMap.get('name');
  // console.log('oninit', namespace, name);
  // this.pod.getLog(namespace, name)
  //   .subscribe(data => {
  //       console.log('组件收到日志', data);
  //       // this.logComponent.data = data;
  //     },
  //     error => {
  //       console.log('e组件收到日志', error.error.text);
  //       this.code = error.error.text;
  //     });
  }
//   getLog(namespace: string, name: string) {
//   this.pod.getLog(namespace, name)
// .subscribe(data => {
//   console.log('组件收到日志', data);
//   // this.logComponent.data = data;
// },
// error => {
//   console.log('e组件收到日志', error.error.text);
//   this.code = error.error.text;
// });
//   }
}
export  interface Data {
  log: string;
  name: string;
  namespace: string;
}
