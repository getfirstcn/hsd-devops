import { Component, OnInit,  ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Pod , Element} from './pod';
import {PodService} from './pod.service';

@Component({
  selector: 'app-pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.scss'],
  providers: [PodService]
})
export class PodComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  TABLE: any;
  dataSource = new MatTableDataSource<Element>(this.TABLE);

  constructor(private podService: PodService ) { }

  ngOnInit() {
    this.podService.getpods('default').subscribe(
      list => {this.dataSource = list;
      console.log('get pods', list); }
    );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
const DATA = [
  {name: 'Hydrogen', namespace: 'default', label: 'k8s-app: hsd-dashboard', pods: 'string',
    image: 'string', createDate: 'string'
  }]
