import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {NamespaceService} from '../namespace.service';
import {V1Namespace, V1NamespaceList} from '../../api';

@Component({
  selector: 'app-namespaces-all',
  templateUrl: './namespaces-all.component.html',
  styleUrls: ['./namespaces-all.component.scss'],
  providers: [NamespaceService]
})
export class NamespacesAllComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'status', 'createDate'];
  dataSource = new MatTableDataSource();
  value = '';

  constructor(private router: Router,
  private namespaceService: NamespaceService) { }

  ngOnInit() {
    this.initNamespace();
    this.dataSource.paginator = this.paginator;
  }
  initNamespace() {
      this.namespaceService.listNamespace()
        .subscribe(namespace => {
          this.dataSource.data = this.generateNamespaceField(namespace.items);
        });
  }
  generateNamespaceField(items: Array<V1Namespace>): Array<NamespaceItems> {
    const columns: Array<NamespaceItems> = [];
    for (const i of items) {
      const column = {
        'name': i.metadata.name,
        'status': i.status.phase,
        'createDate': i.metadata.creationTimestamp
      };
      columns.push(column);
    }
    return columns;
  }
  setNamespace() {
    this.router.navigateByUrl('/k8s/deployments?namespace=kube-system');
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  deleteNamespace(name: string) {
  }
}
export interface NamespaceItems {
  name: string;
  status: string;
  createDate: Date;
}
