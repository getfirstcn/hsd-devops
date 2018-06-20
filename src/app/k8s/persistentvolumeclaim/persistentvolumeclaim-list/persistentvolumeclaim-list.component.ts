import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PersistentvolumeclaimService} from '../persistentvolumeclaim.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {V1PersistentVolumeClaim} from '../../api';

@Component({
  selector: 'app-persistentvolumeclaim-list',
  templateUrl: './persistentvolumeclaim-list.component.html',
  styleUrls: ['./persistentvolumeclaim-list.component.scss'],
  providers: [PersistentvolumeclaimService]
})
export class PersistentvolumeclaimListComponent implements OnInit, AfterViewInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50, 100];
  displayedColumns = ['name', 'namespace', 'status', 'volume', 'storage', 'accessModes', 'storageClassName', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  value = '';

  constructor(
    private route: ActivatedRoute,
    private service: PersistentvolumeclaimService
  ) { }

  ngOnInit() {
    this.initPersistentvolumeclaims();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.updatePersistentVolumeClaims();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  initPersistentvolumeclaims() {
    const namespace = this.route.snapshot.queryParams.namespace;
    this.service.listPersistentVolumeClaims(namespace)
      .subscribe(persistentvolumeclaims => {
        console.log('卷声明', persistentvolumeclaims);
        this.dataSource.data = this.generatePersistentVolumeClaimField(persistentvolumeclaims.items);
        this.length = persistentvolumeclaims.items.length;
      });
  }
  generatePersistentVolumeClaimField(list: Array<V1PersistentVolumeClaim>): Array<PersistentVolumeClaimItems> {
    const columns: PersistentVolumeClaimItems[] = [];
    for (const i of list) {
      const column = {
        'name': i.metadata.name,
        'namespace': i.metadata.namespace,
        'status': i.status.phase,
        'volume': '',
        'storage': i.spec.resources.requests['storage'],
        'accessModes': i.spec.accessModes,
        'storageClassName': i.spec.storageClassName,
        'createDate': i.metadata.creationTimestamp
      };
      columns.push(column);
    }
    console.log('cloumns', columns);
    return columns;
  }
  updatePersistentVolumeClaims() {
    this.route.queryParams.subscribe(params => {
      this.service.listPersistentVolumeClaims(params.namespace)
        .subscribe(persistentVolumeClaims => {
          this.dataSource.data = this.generatePersistentVolumeClaimField(persistentVolumeClaims.items);
          this.length = persistentVolumeClaims.items.length;
        });
    });
  }

  deletePersistentVolumeClaim(namespace: string, name: string) {
    this.service.deletePersistentVolumeClaim(namespace, name)
      .subscribe(status => {
        if (status.status === 'Success') {
          this.initPersistentvolumeclaims();
        }
      });
  }


}

export class PersistentVolumeClaimItems {
  name: string;
  namespace: string;
  status: string;
  volume: string;
  storage: string;
  accessModes: Array<string>;
  storageClassName: string;
  createDate: Date;
}
