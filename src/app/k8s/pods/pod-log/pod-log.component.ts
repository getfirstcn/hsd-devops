import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PodsService} from '../pods.service';

@Component({
  selector: 'app-pod-log',
  templateUrl: './pod-log.component.html',
  styleUrls: ['./pod-log.component.scss']
})
export class PodLogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Data,
    public dialogRef: MatDialogRef<PodLogComponent>,
    private podsService: PodsService
  ) { }
  options: any = {maxLines: 1000, printMargin: false};
  text = this.data.log;

  ngOnInit() {
  }
  onChange(data) {
    console.log(data);
  }
  onClick(): void {
    this.dialogRef.close();
  }

}
export  interface Data {
  log: string;
  name: string;
  namespace: string;
}
