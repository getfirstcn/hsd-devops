import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {NamespaceService} from '../namespace/namespace.service';
import {ReplicationControllerService} from './replication-controller.service';

@Component({
  selector: 'app-replication-controllers',
  templateUrl: './replication-controllers.component.html',
  styleUrls: ['./replication-controllers.component.scss'],
  providers: [ReplicationControllerService]
})
export class ReplicationControllersComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ns: NamespaceService,
              private rcs: ReplicationControllerService) { }

  ngOnInit() {
    this.initReplicationControllers();
  }
  initReplicationControllers() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        this.rcs.listReplicationControllers(namespace)
          .subscribe(resp => {
            this.dataSource.data = resp.items;
          });
      });
  }
  updateReplicationControllers() {
    this.ns.namespace
      .subscribe(namespace => {
        this.rcs.listReplicationControllers(namespace)
          .subscribe(resp => {
            this.dataSource.data = resp.items;
          });
      });
  }
  deleteReplicationController(namespace: string, name: string) {
    this.rcs.deleteReplicationController(namespace, name)
      .subscribe(resp => {
        if (resp.status === 'Success') {
          this.initReplicationControllers();
        }
      });
  }
  ngAfterViewInit() {
    this.updateReplicationControllers();
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
