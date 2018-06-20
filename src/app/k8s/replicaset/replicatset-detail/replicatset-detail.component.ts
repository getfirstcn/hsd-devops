import { Component, OnInit } from '@angular/core';
import {ReplicasetsService} from '../replicasets.service';
import {ActivatedRoute} from '@angular/router';
import {V1beta2ReplicaSet, V1beta2ReplicaSetList} from '../../api';

@Component({
  selector: 'app-replicatset-detail',
  templateUrl: './replicatset-detail.component.html',
  styleUrls: ['./replicatset-detail.component.scss'],
  providers: [ReplicasetsService]
})
export class ReplicatsetDetailComponent implements OnInit {
  replicaset: V1beta2ReplicaSet;

  constructor(
    private route: ActivatedRoute,
    private replicasetsService: ReplicasetsService
  ) { }

  ngOnInit() {
    this.readeReplicaset();
  }
  readeReplicaset() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    const name = this.route.snapshot.paramMap.get('name');
    this.replicasetsService.readReplicaSet(namespace, name)
      .subscribe(replicaset => {
        this.replicaset = replicaset;
      });
  }

}
