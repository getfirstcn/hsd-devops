import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ConfigmapService} from '../configmap.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {V1ConfigMap} from '../../api';

@Component({
  selector: 'app-configmap-list',
  templateUrl: './configmap-list.component.html',
  styleUrls: ['./configmap-list.component.scss'],
  providers: [ConfigmapService]
})
export class ConfigmapListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  value = '';

  constructor(
    private configmapService: ConfigmapService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initConfigmaps();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.updateConfigmap();
  }
  initConfigmaps() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    this.configmapService.listConfigMaps(namespace)
      .subscribe(configmaps => {
        this.dataSource.data = this.generateConfigmapField(configmaps.items);
      });
  }
  generateConfigmapField(list: Array<V1ConfigMap>): Array<ConfigmapItems> {
    const columns: ConfigmapItems[] = [];
    for (const i of list) {
      const column = {
        'name': i.metadata.name,
        'namespace': i.metadata.namespace,
        'createDate': i.metadata.creationTimestamp
      };
      columns.push(column);
    }
    return columns;
  }
  updateConfigmap() {
    this.route.queryParams.subscribe(params => {
      this.configmapService.listConfigMaps(params.namespace)
        .subscribe(configmaps => {
          this.dataSource.data = this.generateConfigmapField(configmaps.items);
        });
    });
  }
  deleteConfigMap() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export class ConfigmapItems {
  name: string;
  namespace: string;
  createDate: Date;
}
