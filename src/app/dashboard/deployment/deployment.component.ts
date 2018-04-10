import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Deployment, DeploymentList} from './deployment';
import {DeploymentsService} from './deployments.service';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.scss'],
  providers: [DeploymentsService]
})
export class DeploymentComponent implements OnInit, OnDestroy {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  TABLE: Element[];
  deployments: DeploymentList;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  DataSource: any;
  dataSource = new MatTableDataSource<Element>(this.DataSource);
  constructor(private deploymentsService: DeploymentsService) {}
  ngOnInit() {
    this.deploymentsService.getDeployments().subscribe(list => {this.dataSource = list;
      console.log('获得', this.dataSource);
    });
  }
  ngAfterViewInit() {
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
