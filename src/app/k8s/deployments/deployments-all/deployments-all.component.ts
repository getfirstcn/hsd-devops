import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {V1beta2Deployment, V1beta2DeploymentList, V1beta2DeploymentStatus, V1Container, V1LabelSelector, V1Status} from '../../api';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DeploymentsService} from '../deployments.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DeploymentReplaceComponent} from '../deployment-replace/deployment-replace.component';


@Component({
  selector: 'app-deployments-all',
  templateUrl: './deployments-all.component.html',
  styleUrls: ['./deployments-all.component.scss'],
  providers: [DeploymentsService]
})
export class DeploymentsAllComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  deployments: V1beta2DeploymentList;
  length: number;
  DATA: DeploymentsItems[];
  value = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  constructor(
    private deploymentsService: DeploymentsService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initDeployments();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.updateDeployments();
    // this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  initDeployments() {
    const namespace = this.route.snapshot.queryParams.namespace;
    this.route.queryParams.subscribe(params => {
      console.log('这个', params);
    });
    this.deploymentsService.listDeployments(namespace)
      .subscribe(data => {
        this.dataSource.data = this.generatorDeploymentsField(data.items);
        console.log('长度', this.dataSource);
        this.length = data.items.length;
      });
  }

  generatorDeploymentsField(list: Array<V1beta2Deployment>): Array<DeploymentsItems> {
    const columns: DeploymentsItems[] = [];
    for (const i of list) {
      const column = {
        'name': i.metadata.name,
        'namespace': i.metadata.namespace,
        'label': i.metadata.labels,
        'pods': i.status,
        'image': i.spec.template.spec.containers,
        'createDate': i.metadata.creationTimestamp,
      };
      columns.push(column);
    }
    return columns;
  }
  generatorContainersField(list: V1Container[]): ContainerItems[] {
    const columns: ContainerItems[] = [];
    for (const i of list) {
      const column: ContainerItems = {'name': '', 'image': ''};
      column.name = i.name;
      columns.push(column);
    }
    return columns;
  }
  updateDeployments() {
    this.route.queryParams.subscribe(params => {
      this.deploymentsService.listDeployments(params.namespace)
        .subscribe(data => {
          console.log('gengxin', data);
          this.dataSource.data = this.generatorDeploymentsField(data.items);
          console.log('数据源', this.dataSource)
          this.length = data.items.length;
        });
    });
  }

  deleteDeployment(namespace: string, name: string) {
    console.log('namespace:', namespace, 'name:', name);
    this.deploymentsService.deleteDeployment(namespace, name)
      .subscribe(status => {
        console.log(status);
        if (status.status === 'Success') {
          this.initDeployments();
        }
      });
  }

  replaceDeployment(namespace: string, name: string) {
    this.deploymentsService.readeDeployment(namespace, name)
      .subscribe(resp => {
        console.log('tostring', JSON.stringify(resp));
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

export interface DeploymentsItems {
  name: string;
  namespace: string;
  label: { [key: string]: string; };
  pods: V1beta2DeploymentStatus;
  image: V1Container[];
  createDate: Date;
}
export interface ContainerItems {
  name: string;
  image: string;
}

