import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Element} from '../node/node.component';

@Component({
  selector: 'app-daemon-sets',
  templateUrl: './daemon-sets.component.html',
  styleUrls: ['./daemon-sets.component.scss']
})
export class DaemonSetsComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU_requests', 'Memory_requests', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor() { }

  ngOnInit() {
  }

}
