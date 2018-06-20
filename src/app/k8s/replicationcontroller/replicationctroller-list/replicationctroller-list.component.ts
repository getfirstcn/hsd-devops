import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  V1Container,
  V1ReplicationController,
  V1ReplicationControllerList,
  V1ReplicationControllerStatus
} from '../../api';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {ReplicationctrollersService} from '../replicationctrollers.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-replicationctroller-list',
  templateUrl: './replicationctroller-list.component.html',
  styleUrls: ['./replicationctroller-list.component.scss'],
  providers: [ReplicationctrollersService]
})
export class ReplicationctrollerListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  replicationControllers: V1ReplicationControllerList;
  length: number;
  value = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  constructor(
    private replicationcontrollersService: ReplicationctrollersService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  initReplicationcontroller() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    this.replicationcontrollersService.listReplicationControllers(namespace)
      .subscribe(replicationcontrollers => {
        this.dataSource.data = replicationcontrollers.items;
        this.length = replicationcontrollers.items.length;
      });
  }

  generateReplicationcontrollerField(list: Array<V1ReplicationController>): Array<ReplicationcontrollerItems> {
    const columns: ReplicationcontrollerItems[] = [];
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
  updateReplicationcontroller() {
    this.route.queryParams.subscribe(params => {
      this.replicationcontrollersService.listReplicationControllers(params.namespace)
        .subscribe(replicationControllers => {
          this.dataSource.data = this.generateReplicationcontrollerField(replicationControllers.items);
          this.length = replicationControllers.items.length;
        });
    });
  }
  // replaceReplicationcontroller(namespace: string, name: string) {
  //   this.replicationcontrollersService.readReplicationController(namespace, name)
  //     .subscribe(replicationcontroller => {
  //       const dialogRef = this.dialog.open();
  //     });
  // }

}
export interface ReplicationcontrollerItems {
  name: string;
  namespace: string;
  label: { [key: string]: string; };
  pods: V1ReplicationControllerStatus;
  image: V1Container[];
  createDate: Date;
}
