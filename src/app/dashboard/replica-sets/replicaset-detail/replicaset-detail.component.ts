import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReplicasetsService} from '../replica-set.service';
import {V1ReplicaSet} from '../../api';

@Component({
  selector: 'app-replicaset-detail',
  templateUrl: './replicaset-detail.component.html',
  styleUrls: ['./replicaset-detail.component.scss'],
  providers: [ReplicasetsService]
})
export class ReplicasetDetailComponent implements OnInit {
  replicaset: V1ReplicaSet;

  constructor(private router: ActivatedRoute,
              private rss: ReplicasetsService) { }

  ngOnInit() {
    this.getReplicaset();
  }
  getReplicaset() {
    const namespace = this.router.snapshot.paramMap.get('namespace');
    const name = this.router.snapshot.paramMap.get('name');
    this.rss.readReplicaSet(namespace, name)
      .subscribe(resp => {
        this.replicaset = resp;
      });
  }
}
