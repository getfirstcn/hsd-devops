import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {SecretService} from '../secret.service';
import {ActivatedRoute} from '@angular/router';
import {V1Secret} from '../../api';

@Component({
  selector: 'app-secrets-list',
  templateUrl: './secrets-list.component.html',
  styleUrls: ['./secrets-list.component.scss'],
  providers: [SecretService]
})
export class SecretsListComponent implements OnInit, AfterViewInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50, 100];
  pageEvent: PageEvent;
  displayedColumns = ['name', 'namespace', 'type', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  value = '';

  constructor(
    private secretService: SecretService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initSecrets();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.updateSecret();
  }
  initSecrets() {
    const namespace = this.route.snapshot.queryParams.namespace;
    this.secretService.listSecrets(namespace)
      .subscribe(secrets => {
        this.dataSource.data = this.generateSecretsField(secrets.items);
      });
  }
  generateSecretsField(list: Array<V1Secret>): Array<SecretItems> {
    const columns: SecretItems[] = [];
    for (const i of list) {
      const column = {
        'name': i.metadata.name,
        'namespace': i.metadata.namespace,
        'type': i.type,
        'createDate': i.metadata.creationTimestamp
      };
      columns.push(column);
    }
    return columns;
  }

  updateSecret() {
    this.route.queryParams.subscribe(params => {
      this.secretService.listSecrets(params.namespace)
        .subscribe(secrets => {
          this.dataSource.data = this.generateSecretsField(secrets.items);
        });
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export class SecretItems {
  name: string;
  namespace: string;
  type: string;
  createDate: Date;
}
