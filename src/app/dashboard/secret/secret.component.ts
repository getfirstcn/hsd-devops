import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, PageEvent, MatPaginator, MatPaginatorIntl} from '@angular/material';
import {SecretService} from './secret.service';
import {NamespaceService} from '../namespace/namespace.service';
import {Secret} from './secret';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss'],
  providers: [SecretService]
})
export class SecretComponent implements OnInit, AfterViewInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50, 100];
  pageEvent: PageEvent;
  displayedColumns = ['name', 'namespace', 'type', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Secret>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private secretService: SecretService,
    private ns: NamespaceService) { }

  ngOnInit() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        this.secretService.getSecretList(namespace)
          .subscribe(data => this.dataSource.data = data.items);
      });
  }
  updateScrets() {
  this.ns.namespace
    .subscribe(namespace => {
  console.log('凭据收到', namespace)
  this.secretService.getSecretList(namespace)
.subscribe(data => this.dataSource.data = data.items);
});
  }
  ngAfterViewInit() {
    this.updateScrets();
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    console.log(this.dataSource)
    this.dataSource.filter = filterValue;
  }
  deleteSecret(namespace: string, name: string) {}
}
