import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-cronjob-list',
  templateUrl: './cronjob-list.component.html',
  styleUrls: ['./cronjob-list.component.scss']
})
export class CronjobListComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU', 'memory', 'createDate'];
  dataSource = new MatTableDataSource();
  value = '';

  constructor() { }

  ngOnInit() {
  }

}
