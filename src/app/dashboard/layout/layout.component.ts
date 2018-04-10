import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild(SidenavComponent)
  private  sidenav: SidenavComponent;

  constructor() { }
  name = 'xingfei';
  agreed = 0;
  disagreed = 0;
  side = 'side';
  one = '1';
  oue = '0';
  swich: boolean;
  make(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
  console(str: boolean) {
    console.log(str);
  }
  toggleHandler() {
    console.log('事件来了');
    this.sidenav.toggle();
  }
  ngOnInit() {
  }
}
