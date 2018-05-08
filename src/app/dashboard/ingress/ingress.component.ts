import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Element} from '../node/node.component';
import {NamespaceService} from '../namespace/namespace.service';
import {IngressService} from './ingress.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ingress',
  templateUrl: './ingress.component.html',
  styleUrls: ['./ingress.component.scss'],
  providers: [IngressService]
})
export class IngressComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'rule', 'status', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ns: NamespaceService,
              private ingressService: IngressService) { }

  ngOnInit() {
    this.initIngress();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.updateIngress();
  }
  initIngress() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        console.log('初始命名空间', namespace);
      this.ingressService.listIngreeses(namespace)
        .subscribe(
          ingress => {
            console.log(ingress);
            this.dataSource.data = ingress.items;
          }
    );
    });
  }
  updateIngress() {
    this.ns.namespace
      .subscribe(name => {
        this.ingressService.listIngreeses(name)
          .subscribe(
            ingress => this.dataSource.data = ingress.items
          );
      });
  }
  deleteIngress(namespace, name) {
    this.ingressService.deleteIngrees(namespace, name);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}