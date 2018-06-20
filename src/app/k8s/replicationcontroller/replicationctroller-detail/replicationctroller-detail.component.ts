import { Component, OnInit } from '@angular/core';
import {ReplicasetsService} from '../../replicaset/replicasets.service';
import {ActivatedRoute} from '@angular/router';
import {ReplicationctrollersService} from '../replicationctrollers.service';
import {V1ReplicationController} from '../../api';

@Component({
  selector: 'app-replicationctroller-detail',
  templateUrl: './replicationctroller-detail.component.html',
  styleUrls: ['./replicationctroller-detail.component.scss'],
  providers: [ReplicationctrollersService]
})
export class ReplicationctrollerDetailComponent implements OnInit {
  replicationcontroller: V1ReplicationController;

  constructor(
    private route: ActivatedRoute,
    private replicationcontrollerService: ReplicationctrollersService
  ) { }

  ngOnInit() {
    this.readeReplicationcontroller();
  }
  readeReplicationcontroller() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    const name = this.route.snapshot.paramMap.get('name');
    this.replicationcontrollerService.readReplicationController(namespace, name)
      .subscribe(resp => {
        this.replicationcontroller = resp;
      });
  }

}
