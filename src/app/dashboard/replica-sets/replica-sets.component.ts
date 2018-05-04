import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Element} from '../node/node.component';

@Component({
  selector: 'app-replica-sets',
  templateUrl: './replica-sets.component.html',
  styleUrls: ['./replica-sets.component.scss']
})
export class ReplicaSetsComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU_requests', 'Memory_requests', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor() { }

  ngOnInit() {
  }

}
