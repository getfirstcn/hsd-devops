import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Element} from '../node/node.component';

@Component({
  selector: 'app-replication-controllers',
  templateUrl: './replication-controllers.component.html',
  styleUrls: ['./replication-controllers.component.scss']
})
export class ReplicationControllersComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU_requests', 'Memory_requests', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor() { }

  ngOnInit() {
  }

}
