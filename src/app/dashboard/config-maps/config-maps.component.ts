import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Element} from '../node/node.component';
import {NamespaceService} from '../namespace/namespace.service';
import {ConfigMapService} from './config-map.service';

@Component({
  selector: 'app-config-maps',
  templateUrl: './config-maps.component.html',
  styleUrls: ['./config-maps.component.scss'],
  providers: [ConfigMapService]
})
export class ConfigMapsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'namespace', 'createDate'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ns: NamespaceService,
              private cms: ConfigMapService) { }

  ngOnInit() {
    this.initConfigMaps();
  }
  ngAfterViewInit() {
    this.updateConfigMaps();
    this.dataSource.paginator = this.paginator;
  }
  initConfigMaps() {
    this.ns.getGlobalNamespace()
      .subscribe(namespace => {
        this.cms.listConfigMaps(namespace)
          .subscribe(resp => {
            console.log('初始配置', resp)
            this.dataSource.data = resp.items;
          });
      });
  }
  updateConfigMaps() {
    this.ns.namespace
      .subscribe(namespace => {
        this.cms.listConfigMaps(namespace)
          .subscribe(resp => {
            this.dataSource.data = resp.items;
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
