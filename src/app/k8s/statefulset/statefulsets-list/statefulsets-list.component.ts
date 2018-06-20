import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {StatefulsetsService} from '../statefulsets.service';
import {DeploymentsItems} from '../../deployments/deployments-all/deployments-all.component';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {V1beta2DeploymentStatus, V1Container, V1StatefulSet, V1StatefulSetStatus} from '../../api';

@Component({
  selector: 'app-statefulsets-list',
  templateUrl: './statefulsets-list.component.html',
  styleUrls: ['./statefulsets-list.component.scss'],
  providers: [StatefulsetsService]
})
export class StatefulsetsListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  length: number;
  value = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  constructor(
    private statefulsetsService: StatefulsetsService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initStatefulsets();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.updateStatefulset();
  }
  initStatefulsets() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    this.statefulsetsService.listStatefulsetsList(namespace)
      .subscribe(statefulsets => {
        this.dataSource.data = this.generateStatefulsetsField(statefulsets.items);
      });
  }
  generateStatefulsetsField(list: Array<V1StatefulSet>): Array<StatefulsetItems> {
    const columns: StatefulsetItems[] = [];
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
  updateStatefulset() {
    this.route.queryParams.subscribe(params => {
      this.statefulsetsService.listStatefulsetsList(params.namespace)
        .subscribe(statefulsets => {
          this.dataSource.data = this.generateStatefulsetsField(statefulsets.items);
          this.length = statefulsets.items.length;
          }
        );
    });
  }
  deleteStatefulset(namespace: string, name: string) {
    this.statefulsetsService.deleteStatefulset(namespace, name)
  .subscribe(status => {
      console.log(status);
      if (status.status === 'Success') {
        this.initStatefulsets();
      }
    });
  }



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
export interface StatefulsetItems {
  name: string;
  namespace: string;
  label: { [key: string]: string; };
  pods: V1StatefulSetStatus;
  image: V1Container[];
  createDate: Date;
}
