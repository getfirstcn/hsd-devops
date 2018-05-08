import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Element} from '../node/node.component';
import {NamespaceService} from '../namespace/namespace.service';
import {DaemonSetService} from './daemon-set.service';

@Component({
  selector: 'app-daemon-sets',
  templateUrl: './daemon-sets.component.html',
  styleUrls: ['./daemon-sets.component.scss'],
  providers: [DaemonSetService]
})
export class DaemonSetsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ns: NamespaceService,
              private ds: DaemonSetService) { }

  ngOnInit() {
    this.initDaemonSet();
  }
  ngAfterViewInit() {
    this.updateDaemonSet();
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  initDaemonSet() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        this.ds.listDaemonSet(namespace)
          .subscribe(resp => {
            this.dataSource.data = resp.items;
          });
      });
  }
  updateDaemonSet() {
    this.ns.namespace
      .subscribe(namespace => {
        this.ds.listDaemonSet(namespace)
          .subscribe(resp => {
            this.dataSource.data = resp.items;
          });
      });
  }
  deleteDaemonSet(namespace: string, name: string) {
    this.ds.deleteDaemonSet(namespace, name)
      .subscribe(resp => {
        if (resp.status === 'Success') {
          this.initDaemonSet();
        }
      });
  }

}
