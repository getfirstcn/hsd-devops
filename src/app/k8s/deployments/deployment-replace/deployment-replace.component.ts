import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {V1beta2Deployment} from '../../api';
import {PodLogComponent} from '../../pods/pod-log/pod-log.component';
import {DeploymentsService} from '../deployments.service';
import {dump as toYaml, load as fromYaml} from 'js-yaml';


@Component({
  selector: 'app-deployment-replace',
  templateUrl: './deployment-replace.component.html',
  styleUrls: ['./deployment-replace.component.scss']
})
export class DeploymentReplaceComponent implements OnInit {
  options: any = {maxLines: 1000, printMargin: false};
  text = toYaml(this.data);
  code = 'Critical dependency: the request of a dependency is an expression';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: string,
    public dialogRef: MatDialogRef<PodLogComponent>,
    private deploymentService: DeploymentsService
  ) { }
  ngOnInit() {
    console.log('init', this.data);
    // this.text = this.data;
  }
  // onChange(data) {
  //   console.log(data);
  // }
  onClick(): void {
    this.deploymentService.replaceDeployment(fromYaml(this.text))
      .subscribe(deployments => {
        if (deployments) {
          location.reload();
        }
      });
    this.dialogRef.close();
    console.log(this.text);
  }
}
