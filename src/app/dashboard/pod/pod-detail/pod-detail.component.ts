import { Component, OnInit } from '@angular/core';
import {Pod} from '../pod';
import {PodService} from '../pod.service';

@Component({
  selector: 'app-pod-detail',
  templateUrl: './pod-detail.component.html',
  styleUrls: ['./pod-detail.component.scss'],
  providers: [PodService]
})
export class PodDetailComponent implements OnInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  namespace = 'default';
  name = 'hsd-dashboard-6df46dbd98-7jqn7';
  pod: Pod;
  dataSource: any;

  constructor(private podService: PodService) { }

  ngOnInit() {
    this.podService.getpod(this.namespace, this.name)
      .subscribe(pod => {this.pod = pod; this.dataSource = [pod]; console.log(pod); } );
  }

}
