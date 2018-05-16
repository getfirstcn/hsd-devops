import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {ServiceService} from './service.service';
import {Router} from '@angular/router';
import {NamespaceService} from '../namespace/namespace.service';
import {ServiceReplaceComponent} from './service-replace/service-replace.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [ServiceService]
})
export class ServiceComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'namespace', 'label', 'clusterIP', 'internalEndpoint', 'externalEndpoint', 'createDate'];
  dataSource = new MatTableDataSource();

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private ns: NamespaceService,
    public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.updateService();
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.initService();
  }
  initService() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        console.log('init namespace', namespace);
        this.serviceService.getservices(namespace).subscribe(
          list => {this.dataSource.data = list; console.log('get services', list); }
        );
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  deleteService(namespace: string, name: string) {
    this.serviceService.deleteService(namespace, name)
      .subscribe(status => {
        console.log('删除服务', status);
        if (status.status === 'Success') {
        this.initService();
        }
      });
  }
  updateService() {
    this.ns.namespace.subscribe(namespace => {
      this.serviceService.getservices(namespace).subscribe(
        list => {this.dataSource.data = list; console.log('update services', list); }
      );
    });
  }
  replaceService(namespace: string, name: string) {
    this.serviceService.getservice(namespace, name)
      .subscribe(resp => {
        const dialogRef = this.dialog.open(ServiceReplaceComponent, {
          height: 'calc(90vh)',
          width: 'calc(100vw - 100px)',
          data: resp
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      });
  }
}

export interface Element {
  name: string;
  label: string;
  clusterIP: string;
  internalEndpoint: string;
  externalEndpoint: string;
  createDate: string;
}

const ELEMENT_DATA: Element[] = [
  {name: 'Hydrogen', label: 'k8s-app: hsd-dashboard', clusterIP: 'string',
    internalEndpoint: 'string', externalEndpoint: 'string', createDate: 'string'
  },
];
