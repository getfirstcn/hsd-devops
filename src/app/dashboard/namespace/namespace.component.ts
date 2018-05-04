import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Element} from '../service/service.component';
import {Router} from '@angular/router';
import {NamespaceService} from './namespace.service';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.scss'],
  providers: [NamespaceService]
})
export class NamespaceComponent implements OnInit {
  displayedColumns = ['name', 'status', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor(private router: Router,
              private ns: NamespaceService) { }

  ngOnInit() {
    this.ns.getNamepaceList()
      .subscribe(data => {
        this.dataSource = data.items;
        console.log(data);
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  deleteNamespace(name: string) {
  }

}
export interface Element {
  name: string;
  status: string;
  createDate: string;
}
