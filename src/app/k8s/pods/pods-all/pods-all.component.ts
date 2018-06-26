import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PodsService} from '../pods.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {V1beta2DeploymentStatus, V1Container, V1Pod, V1PodList} from '../../api';
import {DeploymentReplaceComponent} from '../../deployments/deployment-replace/deployment-replace.component';
import {PodLogComponent} from '../pod-log/pod-log.component';


@Component({
  selector: 'app-pods-all',
  templateUrl: './pods-all.component.html',
  styleUrls: ['./pods-all.component.scss'],
  providers: [PodsService]
})
export class PodsAllComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'namespace', 'node', 'status', 'restart', 'createDate'];
  dataSource = new MatTableDataSource();
  length: number;
  value = '';

  constructor(
    private podService: PodsService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.initPods();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.updatePods();
  }
  initPods() {
    const namespace = this.route.snapshot.queryParams.namespace;
    this.podService.listPods(namespace)
      .subscribe(data => {
        this.dataSource.data = this.generatorPodsField(data.items);
        this.length = data.items.length;
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  generatorPodsField(items: Array<V1Pod>): Array<PodsField> {
    const columns: PodsField[] = [];
    for (const i of items) {
      const column = {
        'name': i.metadata.name,
        'namespace': i.metadata.namespace,
        'node': i.spec.nodeName,
        'status': i.status.phase,
        'restart': i.status.containerStatuses[0].restartCount,
        'createDate': i.metadata.creationTimestamp,
      };
      columns.push(column);
    }
    return columns;
  }
  updatePods() {
    this.route.queryParams.subscribe(params => {
      this.podService.listPods(params.namespace)
        .subscribe(data => {
          this.dataSource.data = this.generatorPodsField(data.items);
          this.length = data.items.length;
        });
    });
  }
  deletePods(namespace: string, name: string) {
    this.podService.deletePods(namespace, name)
      .subscribe(status => {
        console.log('结果', status);
          setTimeout(this.getpods(status.metadata.namespace), 6000);
      });
  }
  getpods(namespace: string) {
    this.podService.listPods(namespace)
    .subscribe(pods => {
      this.dataSource.data = this.generatorPodsField(pods.items);
      this.length = pods.items.length;
      console.log('Success');
    });
  }
  // replacePods(namespace: string, name: string) {
  //   this.podService.readePods(namespace, name)
  //     .subscribe(resp => {
  //       const dialogRef = this.dialog.open(DeploymentReplaceComponent, {
  //         height: 'calc(90vh)',
  //         width: 'calc(100vw - 100px)',
  //         data: resp
  //       });
  //       dialogRef.afterClosed().subscribe(result => {
  //         console.log(`Dialog result: ${result}`);
  //     });
  // });
  // }
  readeLog(namespace: string, name: string) {
    this.podService.readeLog(namespace, name)
      .subscribe(log => {
        console.log('获得日志', log);
        const dialogRef = this.dialog.open(PodLogComponent, {
          height: 'calc(90vh)',
          width: 'calc(100vw - 100px)',
          data: {log: log, name: name, namespace: namespace}
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      },
        error => {
          const dialogRef = this.dialog.open(PodLogComponent, {
            height: 'calc(90vh)',
            width: 'calc(100vw - 100px)',
            data: {log: error.error.text, name: name, namespace: namespace}
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
          });
        }
      );
  }
}

export interface PodsField {
  name: string;
  namespace: string;
  node: string;
  status: string;
  restart: number;
  createDate: Date;
}
