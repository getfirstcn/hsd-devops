import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {NamespaceService} from '../namespace/namespace.service';
import {IngressService} from './ingress.service';
import {Router} from '@angular/router';
import {IngressReplaceComponent} from './ingress-replace/ingress-replace.component';

@Component({
  selector: 'app-ingress',
  templateUrl: './ingress.component.html',
  styleUrls: ['./ingress.component.scss'],
  providers: [IngressService]
})
export class IngressComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'rule', 'status', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ns: NamespaceService,
              private ingressService: IngressService,
              private router: Router,
              public dialog: MatDialog) { }

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
    console.log('删除入口', namespace, name);
    this.ingressService.deleteIngrees(namespace, name)
      .subscribe(resp => {
        console.log(resp);
        if (resp.status === 'Success') {
          this.initIngress();
        }
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  replaceIngress(namespace: string, name: string) {
    this.ingressService.readIngrees(namespace, name)
      .subscribe(resp => {
        const dialogRef = this.dialog.open(IngressReplaceComponent, {
          height: 'calc(90vh)',
          width: 'calc(100vw - 100px)',
          data: resp
        });
      });
  }
}
