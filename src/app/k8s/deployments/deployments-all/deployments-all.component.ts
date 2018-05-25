import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-deployments-all',
  templateUrl: './deployments-all.component.html',
  styleUrls: ['./deployments-all.component.sass']
})
export class DeploymentsAllComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  reseturl() {
    this.router.navigateByUrl('/k8s/namespace');
  }

}
