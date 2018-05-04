import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Pod , Element} from './pod';
import {PodService} from './pod.service';
import {LogComponent} from './log/log.component';
import {NamespaceService} from '../namespace/namespace.service';

@Component({
  selector: 'app-pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.scss'],
  providers: [PodService, LogComponent]
})
export class PodComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  dataSource = new MatTableDataSource();
  data: string;

  constructor(
    private podService: PodService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private ns: NamespaceService
  ) { }

  ngOnInit() {
    this.initPod();
  }
  ngAfterViewInit() {
    this.updatePod();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  initPod() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        this.podService.getpods(namespace)
          .subscribe(list => {
            this.dataSource.data = list;
          });
      });
  }
  updatePod() {
    this.ns.namespace
      .subscribe(namespace => {
        this.podService.getpods(namespace)
          .subscribe(list => {
            this.dataSource.data = list;
          });
      });
  }
  deletePod(namespace: string, name: string) {
    this.podService.deletePod(namespace, name)
      .subscribe(status => {
        console.log('删除服务', status);
          setTimeout(() => {
            console.log('开始删除服务', status);
            this.podService.getpods('default').subscribe(
              list => {this.dataSource = list;
                console.log('get pods', list); }
            );
          }, 6000);
      });
  }
  openLogDialog(namespace: string, name: string) {
    this.podService.getLog(namespace, name)
      .subscribe(data => {
          console.log('组件收到日志', data);
          // this.logComponent.data = data;
        },
        error => {
          console.log('e组件收到日志', error.error.text);
          const dialogRef = this.dialog.open(LogComponent, {
            height: 'calc(90vh)',
            width: 'calc(100vw - 100px)',
            data: {log: error.error.text, name: name, namespace: namespace}
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
          });
        });
    // this.router.navigate(['/dashboard/log', namespace, name])
    // this.log.getLog(namespace, name);
  }
}
const DATA = [
  {name: 'Hydrogen', namespace: 'default', label: 'k8s-app: hsd-dashboard', pods: 'string',
    image: 'string', createDate: 'string'
  }];
