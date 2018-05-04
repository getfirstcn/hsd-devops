import { Component, OnInit } from '@angular/core';
import {NodeService} from './node.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  providers: [NodeService]
})
export class NodeComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU_requests', 'Memory_requests', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor(private svc: NodeService) { }

  ngOnInit() {
    this.svc.getNodeList().subscribe(data => {
      this.dataSource = data.items ;
      console.log('nodes', data);
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  deleteNode(namespace: string, name: string) {}

}
export interface Element {
  name: string;
  label: string;
  CPU_requests: string;
  CPU_limits: string;
  Memory_requests: string;
  Memory_limits: string;
  createDate: Date;
}
