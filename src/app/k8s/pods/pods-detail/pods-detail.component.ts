import { Component, OnInit } from '@angular/core';
import {PodsService} from '../pods.service';
import {ActivatedRoute} from '@angular/router';
import {V1Pod} from '../../api';

@Component({
  selector: 'app-pods-detail',
  templateUrl: './pods-detail.component.html',
  styleUrls: ['./pods-detail.component.scss'],
  providers: [PodsService]
})
export class PodsDetailComponent implements OnInit {
  namespace: string;
  name: string;
  pod: V1Pod;

  constructor(
    private podService: PodsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.namespace = this.route.snapshot.paramMap.get('namespace');
    this.podService.readePods(this.namespace, this.name)
      .subscribe(pod => {this.pod = pod; console.log(pod); } );
  }

}
