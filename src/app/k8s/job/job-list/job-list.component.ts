import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU', 'memory', 'createDate'];
  dataSource = new MatTableDataSource();
  value = '';

  constructor() { }

  ngOnInit() {
  }

}
