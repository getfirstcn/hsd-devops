import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeploymentsAllComponent} from './deployments-all/deployments-all.component';
import {DeploymentsDetailComponent} from './deployments-detail/deployments-detail.component';

const deploymentsRoutes: Routes = [
  {path: '', component: DeploymentsAllComponent},
  {path: 'detail', component: DeploymentsDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(deploymentsRoutes)
  ],
  exports: [RouterModule]
})
export class DeploymentsRoutingModule { }
