import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Element} from '../node/node.component';

@Component({
  selector: 'app-cron-jobs',
  templateUrl: './cron-jobs.component.html',
  styleUrls: ['./cron-jobs.component.scss']
})
export class CronJobsComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU_requests', 'Memory_requests', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor() { }

  ngOnInit() {
  }

}
