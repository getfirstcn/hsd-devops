import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeploymentsAllComponent} from './deployments-all/deployments-all.component';
import {DeploymentDetailComponent} from './deployment-detail/deployment-detail.component';
import {DeploymentReplaceComponent} from './deployment-replace/deployment-replace.component';

const deploymentsRoutes: Routes = [
  {path: 'all', component: DeploymentsAllComponent},
  {path: ':namespace/:name', component: DeploymentDetailComponent},
  {path: 'editor', component: DeploymentReplaceComponent},
  {path: '', component: DeploymentsAllComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(deploymentsRoutes)
  ],
  exports: [RouterModule]
})
export class DeploymentsRoutingModule { }
