import {Component, Inject, OnInit} from '@angular/core';
import * as yaml from 'js-yaml';
import {MAT_DIALOG_DATA} from '@angular/material';
import {V1Deployment} from '../../api';
import {DeploymentsService} from '../deployments.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deployment-replace',
  templateUrl: './deployment-replace.component.html',
  styleUrls: ['./deployment-replace.component.scss'],
  providers: [DeploymentsService]
})
export class DeploymentReplaceComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: V1Deployment,
    private deploymentService: DeploymentsService,
    private router: Router
  ) { }
  editorOptions = {theme: 'vs-dark', language: 'yaml'};
  // code = 'this.data';
  code = yaml.dump(this.data);

  ngOnInit() {
   console.log('获得数局', this.data);
  }
  replace() {
    console.log('修改后的值', this.code);
    const value =  yaml.load(this.code);
    console.log(typeof value);
    this.deploymentService.replaceDeployment(value)
      .subscribe(resp => {
        if (resp.statusText === 'OK') {
          console.log('修改成功', resp);
          this.router.navigate(['/dashboard/deployments']);
        } else {
          console.log('修改失败', resp);
        }
      });
  }
}
