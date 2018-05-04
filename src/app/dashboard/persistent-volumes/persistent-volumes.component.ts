import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Element} from '../node/node.component';
import {NamespaceService} from '../namespace/namespace.service';

@Component({
  selector: 'app-persistent-volumes',
  templateUrl: './persistent-volumes.component.html',
  styleUrls: ['./persistent-volumes.component.scss']
})
export class PersistentVolumesComponent implements OnInit {
  displayedColumns = ['name', 'label', 'IP', 'CPU_requests', 'Memory_requests', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor(private ns: NamespaceService) { }

  ngOnInit() {
    this.ns.getGlobalNamespace()
      .subscribe(data => console.log('全局namespace', data));
  }
  getnamespace() {
    this.ns.getGlobalNamespace()
      .subscribe(data => console.log('全局namespace', data));
  }

}
