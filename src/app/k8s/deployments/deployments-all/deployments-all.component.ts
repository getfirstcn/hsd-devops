import {Component, OnInit, ViewChild} from '@angular/core';
import {V1beta2DeploymentList} from '../../api';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {DeploymentsService} from '../deployments.service';
import {ActivatedRoute} from '@angular/router';
import {DeploymentReplaceComponent} from '../deployment-replace/deployment-replace.component';


@Component({
  selector: 'app-deployments-all',
  templateUrl: './deployments-all.component.html',
  styleUrls: ['./deployments-all.component.scss'],
  providers: [DeploymentsService]
})
export class DeploymentsAllComponent implements OnInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  deployments: V1beta2DeploymentList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource();

  constructor(
    private deploymentsService: DeploymentsService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initDeployments();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  initDeployments() {
    const namespace = this.route.snapshot.queryParams.namespace;
    this.deploymentsService.listDeployments(namespace)
      .subscribe(data => {
        this.dataSource = data.items;
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
