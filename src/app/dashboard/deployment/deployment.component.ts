import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Deployment, DeploymentList} from './deployment';
import {DeploymentsService} from './deployments.service';
import {NamespaceService} from '../namespace/namespace.service';
import {MatDialog} from '@angular/material';
import {ApplicationDialogComponent} from '../application/application-dialog/application-dialog.component';
import {DeploymentReplaceComponent} from './deployment-replace/deployment-replace.component';
import {LogComponent} from '../pod/log/log.component';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.scss'],
  providers: [DeploymentsService]
})
export class DeploymentComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  deployments: DeploymentList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource();

  constructor(
    private deploymentsService: DeploymentsService,
    private ns: NamespaceService,
    public dialog: MatDialog) {
  }

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
  }

  initDeployment() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        this.deploymentsService.getDeployments(namespace).subscribe(list => {
          this.dataSource.data = list;
          console.log('初始', this.dataSource);
        });
      });
  }

  updateDeployment() {
    this.ns.namespace
      .subscribe(namespace => {
        this.deploymentsService.getDeployments(namespace).subscribe(list => {
          this.dataSource.data = list;
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
  replaceDeployment(namespace: string, name: string) {
    this.deploymentsService.getDeployment(namespace, name)
      .subscribe(resp => {
        const dialogRef = this.dialog.open(DeploymentReplaceComponent, {
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
