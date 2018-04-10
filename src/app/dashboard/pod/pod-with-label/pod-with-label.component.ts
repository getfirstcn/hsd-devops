import { Component, OnInit, Input } from '@angular/core';
import {Pod} from '../pod';
import {PodService} from '../pod.service'

@Component({
  selector: 'app-pod-with-label',
  templateUrl: './pod-with-label.component.html',
  styleUrls: ['./pod-with-label.component.scss']
})
export class PodWithLabelComponent implements OnInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  dataSource: any;
  @Input()namespace: string;
  @Input()label: string;

  constructor(private podService: PodService) { }

  ngOnInit() {
    this.podService.getpodWithLabel(this.namespace, this.label)
      .subscribe(pod => {this.dataSource = pod; console.log(pod); } );
  }

}
