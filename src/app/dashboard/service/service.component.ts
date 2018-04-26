import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ServiceService} from './service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [ServiceService]
})
export class ServiceComponent implements OnInit {
  displayedColumns = ['name', 'label', 'clusterIP', 'internalEndpoint', 'externalEndpoint', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor(
    private serviceService: ServiceService,
    private router: Router) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.serviceService.getservices('default').subscribe(
      list => {this.dataSource = list; console.log('get services', list); }
    );
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
        this.serviceService.getservices('default').subscribe(
          list => {this.dataSource = list; console.log('get services', list); }
        );
        }
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
