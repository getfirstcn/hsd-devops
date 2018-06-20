import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {IngressesService} from '../ingresses.service';
import {ActivatedRoute} from '@angular/router';
import {V1beta1Ingress, V1beta1IngressRule, V1beta2DeploymentStatus, V1Container} from '../../api';


@Component({
  selector: 'app-ingresses-all',
  templateUrl: './ingresses-all.component.html',
  styleUrls: ['./ingresses-all.component.scss'],
  providers: [IngressesService]
})
export class IngressesAllComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'rules', 'address', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length: number;
  value = '';

  constructor(
    private ingressesService: IngressesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initIngresses();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.updateIngress();
  }
  initIngresses() {
    const namespace = this.route.snapshot.queryParams.namespace;
    this.ingressesService.listIngresses(namespace)
      .subscribe(ingresses => {
        this.dataSource.data = ingresses.items;
        console.log(ingresses);
      });
  }
  updateIngress() {
    this.route.queryParams.subscribe(params => {
      // console.log('名空间', params.namespace);
      this.ingressesService.listIngresses(params.namespace)
        .subscribe(ingresses => {
          this.dataSource.data = this.generateIngressesField(ingresses.items);
          this.length = ingresses.items.length;
          // console.log('长度', this.length, ingresses);
        });
    });
  }
  generateIngressesField(items: Array<V1beta1Ingress>): Array<IngressesItems> {
    const columns: IngressesItems[] = [];
    for (const i of items) {
      const column = {
        'name': i.metadata.name,
        'namespace': i.metadata.namespace,
        'rules': i.spec.rules,
        'address': i.spec.rules,
        'createDate': i.metadata.creationTimestamp
      };
      columns.push(column);
    }
    return columns;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface IngressesItems {
  name: string;
  namespace: string;
  rules: Array<V1beta1IngressRule>;
  address: Array<V1beta1IngressRule>;
  createDate: Date;
}
