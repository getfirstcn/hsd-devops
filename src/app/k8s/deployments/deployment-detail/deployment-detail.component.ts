import { Component, OnInit } from '@angular/core';
import {DeploymentsService} from '../deployments.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-deployment-detail',
  templateUrl: './deployment-detail.component.html',
  styleUrls: ['./deployment-detail.component.scss'],
  providers: [DeploymentsService]
})
export class DeploymentDetailComponent implements OnInit {
  namespace: string;
  name: string;
  deployment: any;
  dataSource: any;

  constructor(
    private deploymentService: DeploymentsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.name =  this.route.snapshot.paramMap.get('name');
    this.namespace =  this.route.snapshot.paramMap.get('namespace');
    console.log('get route', this.namespace, this.name);
    this.deploymentService.readeDeployment(this.namespace, this.name)
      .subscribe(deployment => {this.deployment = deployment; this.dataSource = [deployment]; console.log(deployment); }
      );
  }

}
