import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ServiceService} from '../service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {V1beta2DeploymentStatus, V1Container, V1Service, V1ServicePort} from '../../api';
import {ServiceReplaceComponent} from '../service-replace/service-replace.component';

@Component({
  selector: 'app-service-all',
  templateUrl: './service-all.component.html',
  styleUrls: ['./service-all.component.scss'],
  providers: [ServiceService]
})
export class ServicesAllComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'namespace', 'label', 'clusterIP', 'internalEndPoint', 'externalEndPoint', 'createDate'];
  dataSource = new MatTableDataSource();
  length: number;
  value = '';

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.initServices();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.updateServices();
  }
  initServices() {
    const namespace = this.route.snapshot.queryParams.namespace;
    this.serviceService.listServices(namespace)
      .subscribe(data => {
        this.dataSource.data = this.generateServicesField(data.items);
      });
  }
  generateServicesField(list: Array<V1Service>): Array<ServicesItems> {
    const columns: ServicesItems[] = [];
    for (const i of list) {
      const column = {
        'name': i.metadata.name,
        'namespace': i.metadata.namespace,
        'label': i.metadata.labels,
        'clusterIP': i.spec.clusterIP,
        'internalEndPoints': i.spec.ports,
        'externalEndPoints': i.spec.ports,
        'createDate': i.metadata.creationTimestamp,
      };
      columns.push(column);
    }
    return columns;
  }
  updateServices() {
    this.route.queryParams.subscribe(params => {
      this.serviceService.listServices(params.namespace)
        .subscribe(data => {
          this.dataSource.data = this.generateServicesField(data.items);
          this.length = data.items.length;
        });
    });
  }
  deleteService(namespace: string, name: string) {
    this.serviceService.deleteService(namespace, name)
      .subscribe(status => {
        if (status.status = 'Success') {
          this.initServices();
        }
      });
  }
  replaceService(namespace: string, name: string) {
    this.serviceService.readeServices(namespace, name)
      .subscribe(resp => {
        console.log(resp);
        const dialogRef = this.dialog.open(ServiceReplaceComponent, {
          height: 'calc(90vh)',
          width: 'calc(100vw)',
          data: resp
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`dialog result: $(result)`);
        });
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
export interface ServicesItems {
  name: string;
  namespace: string;
  label: { [key: string]: string; };
  clusterIP: string;
  internalEndPoints: Array<V1ServicePort>;
  externalEndPoints: Array<V1ServicePort>;
  createDate: Date;
}
