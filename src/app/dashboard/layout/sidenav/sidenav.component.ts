import {Component, OnInit, Input, Output, ViewChild, AfterViewInit} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @ViewChild(MatSidenav)
  private sidenav: MatSidenav;
  constructor() { }
  ngAfterVierInit() {
  }
  toggle() {this.sidenav.toggle(); }
}


