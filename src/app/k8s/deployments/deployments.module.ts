import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeploymentsRoutingModule} from './deployments-routing.module';
import { DeploymentsAllComponent } from './deployments-all/deployments-all.component';
import { DeploymentDetailComponent } from './deployment-detail/deployment-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DeploymentsRoutingModule
  ],
  declarations: [DeploymentsAllComponent, DeploymentDetailComponent],
  exports: [DeploymentDetailComponent, DeploymentsAllComponent]
})
export class DeploymentsModule { }
