import { Component, OnInit } from '@angular/core';
import {NodesService} from '../nodes.service';
import {MatTableDataSource} from '@angular/material';
import {V1Node} from '../../api';

@Component({
  selector: 'app-nodes-all',
  templateUrl: './nodes-all.component.html',
  styleUrls: ['./nodes-all.component.scss'],
  providers: [NodesService]
})
export class NodesAllComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU', 'memory', 'createDate'];
  dataSource = new MatTableDataSource();
  value = '';

  constructor(
    private nodesService: NodesService
  ) { }

  ngOnInit() {
    this.initNodes();
  }
  initNodes() {
    this.nodesService.listNodes()
      .subscribe(nodes => {
        this.dataSource.data = this.generateNodesField(nodes.items);
      });
  }
  generateNodesField(items: Array<V1Node>): Array<NodesItems> {
    const columns: Array<NodesItems> = [];
    for (const i of items) {
      const column = {
        'name': i.metadata.name,
        'label': i.metadata.labels,
        'ip': i.status.addresses[0].address,
        'CPU': i.status.capacity.cpu,
        'memory': i.status.capacity.memory,
        'createDate': i.metadata.creationTimestamp
      };
      columns.push(column);
    }
    return columns;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  deleteNode(name) {
    this.nodesService.deleteNode(name)
      .subscribe(status => {
        if (status.status === 'Success') {
          this.initNodes();
        }
      });
  }

}
export interface NodesItems {
  name: string;
  label: {[key: string]: string};
  ip: string;
  CPU: string;
  memory: string;
  createDate: Date;
}
