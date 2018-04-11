import { Component, OnInit } from '@angular/core';
import {Pod} from '../pod';
import {PodService} from '../pod.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pod-detail',
  templateUrl: './pod-detail.component.html',
  styleUrls: ['./pod-detail.component.scss'],
  providers: [PodService]
})
export class PodDetailComponent implements OnInit {
  namespace: string;
  name: string;
  pod: Pod;

  constructor(
    private podService: PodService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.namespace = this.route.snapshot.paramMap.get('namespace');
    this.podService.getpod(this.namespace, this.name)
      .subscribe(pod => {this.pod = pod; console.log(pod); } );
  }

}
