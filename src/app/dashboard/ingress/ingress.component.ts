import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Element} from '../node/node.component';

@Component({
  selector: 'app-ingress',
  templateUrl: './ingress.component.html',
  styleUrls: ['./ingress.component.scss']
})
export class IngressComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU_requests', 'Memory_requests', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor() { }

  ngOnInit() {
  }

}
