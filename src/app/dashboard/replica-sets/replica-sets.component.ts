import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {NamespaceService} from '../namespace/namespace.service';
import {ReplicasetsService} from './replica-set.service';

@Component({
  selector: 'app-replication-controllers',
  templateUrl: './Replica-sets.component.html',
  styleUrls: ['./Replica-sets.component.scss'],
  providers: [ReplicasetsService]
})
export class ReplicaSetsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ns: NamespaceService,
              private rs: ReplicasetsService) { }

  ngOnInit() {
    this.initReplicaSets();
  }
  initReplicaSets() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        this.rs.listReplicaSets(namespace)
          .subscribe(resp => {
            console.log('init replicaset', resp);
            this.dataSource.data = resp.items;
          });
      });
  }
  updateReplicaSet() {
    this.ns.namespace
      .subscribe(namespace => {
        this.rs.listReplicaSets(namespace)
          .subscribe(resp => {
            this.dataSource.data = resp.items;
          });
      });
  }
  deleteReplicaSet(namespace: string, name: string) {
    this.rs.deleteReplicaSet(namespace, name)
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
