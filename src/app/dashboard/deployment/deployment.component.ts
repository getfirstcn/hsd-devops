import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Deployment, DeploymentList} from './deployment';
import {DeploymentsService} from './deployments.service';
import {NamespaceService} from '../namespace/namespace.service';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.scss'],
  providers: [DeploymentsService]
})
export class DeploymentComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  TABLE: Element[];
  deployments: DeploymentList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  DataSource: any;
  dataSource = new MatTableDataSource<Element>(this.DataSource);
  constructor(
    private deploymentsService: DeploymentsService,
    private ns: NamespaceService) {}
  ngOnInit() {
    this.initDeployment();
  }
  ngAfterViewInit() {
    this.updateDeployment();
  this.dataSource.paginator = this.paginator;
}

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

ngOnDestroy() {
    console.log('结束', this.TABLE);
}
initDeployment() {
  this.ns.getGlobalNamespace()
    .subscribe(namespace => {
      this.deploymentsService.getDeployments(namespace).subscribe(list => {this.dataSource.data = list;
        console.log('初始', this.dataSource);
      });
    });
}
updateDeployment() {
  this.ns.namespace
    .subscribe(namespace => {
      this.deploymentsService.getDeployments(namespace).subscribe(list => {this.dataSource.data = list;
        console.log('更新', this.dataSource);
      });
    });
}
deleteDeployment(namespace: string, name: string) {
    console.log('namespace:', namespace, 'name:', name);
    this.deploymentsService.deleteDeployment(namespace, name)
      .subscribe(status => {
        console.log(status);
        if (status.status === 'Success') {
          this.initDeployment();
        }
      });
}
}

export interface Element {
  name: string;
  namespace: string;
  label: string;
  pods: string;
  image: string;
  createDate: string;
  icon: string;
}
