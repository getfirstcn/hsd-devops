import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ReplicasetsService } from '../replicasets.service';
import {ActivatedRoute} from '@angular/router';
import {
  V1beta2DeploymentStatus,
  V1beta2ReplicaSet,
  V1beta2ReplicaSetList,
  V1beta2ReplicaSetStatus,
  V1Container,
  V1ReplicaSetList
} from '../../api';

@Component({
  selector: 'app-replicatset-list',
  templateUrl: './replicatset-list.component.html',
  styleUrls: ['./replicatset-list.component.scss'],
  providers: [ReplicasetsService]
})
export class ReplicatsetListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length: number;
  value = '';

  constructor(
    private route: ActivatedRoute,
    private replicasetsService: ReplicasetsService
  ) { }

  ngOnInit() {
  }
  initReplicaSets() {
    const namespace = this.route.snapshot.queryParams.namespace;
    this.replicasetsService.listReplicatSets(namespace)
      .subscribe(replicasets => {
        this.dataSource.data = replicasets.items;
        this.length = replicasets.items.length;
      });
  }
  generatorReplicasetsField(list: Array<V1beta2ReplicaSet>): Array<ReplicasetItems> {
    const columns: ReplicasetItems[] = [];
    for (const i of list) {
      const column = {
        'name': i.metadata.name,
        'namespace': i.metadata.namespace,
        'label': i.metadata.labels,
        'pods': i.status,
        'image': i.spec.template.spec.containers,
        'createDate': i.metadata.creationTimestamp,
      };
      columns.push(column);
    }
    return columns;
  }
  updateReplicaSet() {
    this.route.queryParams.subscribe(params => {
      this.replicasetsService.listReplicatSets(params.namespace)
        .subscribe(replicasets => {
          this.dataSource.data = this.generatorReplicasetsField(replicasets.items);
          this.length = replicasets.items.length;
        });
    });
  }
  deleteReplicaSet(namespace: string, name: string) {
    this.replicasetsService.deleteReplicaSet(namespace, name)
      .subscribe(resp => {
        if (resp.status === 'Success') {
          this.initReplicaSets();
        }
      });
  }
  ngAfterViewInit() {
    this.updateReplicaSet();
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

export interface ReplicasetItems {
  name: string;
  namespace: string;
  label: { [key: string]: string; };
  pods: V1beta2ReplicaSetStatus;
  image: V1Container[];
  createDate: Date;
}
