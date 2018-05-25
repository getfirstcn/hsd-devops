import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeploymentsAllComponent} from './deployments-all/deployments-all.component';
import {DeploymentDetailComponent} from './deployment-detail/deployment-detail.component';

const deploymentsRoutes: Routes = [
  {path: '', component: DeploymentsAllComponent},
  {path: 'all', component: DeploymentsAllComponent},
  {path: 'detail', component: DeploymentDetailComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(deploymentsRoutes)
  ],
  exports: [RouterModule]
})
export class DeploymentsRoutingModule { }
