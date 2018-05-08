import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {NamespaceService} from '../namespace/namespace.service';
import {PersistentVolumeClaimsService} from './persistent-volume-claims.service';

@Component({
  selector: 'app-persistent-volume-claims',
  templateUrl: './persistent-volume-claims.component.html',
  styleUrls: ['./persistent-volume-claims.component.scss'],
  providers: [PersistentVolumeClaimsService]
})
export class PersistentVolumeClaimsComponent implements OnInit, AfterViewInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50, 100];
  displayedColumns = ['name', 'namespace', 'accessModes', 'requests', 'status', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ns: NamespaceService,
              private pvc: PersistentVolumeClaimsService) { }

  ngOnInit() {
    this.initPersistentVolumeClaims();
  }
  ngAfterViewInit() {
    this.updatePersistentVolumeClaims();
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  initPersistentVolumeClaims() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        console.log('存储请求', namespace);
        this.pvc.listPersistentVolumeClaims(namespace)
          .subscribe(pvc =>  {
            console.log('存储', pvc);
            this.dataSource.data = pvc.items;
          });
      });
  }
  updatePersistentVolumeClaims() {
    this.ns.namespace
      .subscribe(namespace => {
        this.pvc.listPersistentVolumeClaims(namespace)
          .subscribe(pvc => {
            console.log('存储', pvc);
            this.dataSource.data = pvc.items;
          });
      });
  }
  deletePersistentVolumeClaim(namespace: string, name: string) {
    this.pvc.deletePersistentVolumeClaim(namespace, name)
      .subscribe(resp => {
        if (resp.status === 'Success') {
        this.initPersistentVolumeClaims();
        }
      });
  }

}
