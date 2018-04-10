import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClusterComponent } from './cluster/cluster.component';
import { LayoutComponent } from './layout/layout.component';
import {DeploymentComponent} from './deployment/deployment.component';
import {DeploymentDetailComponent} from './deployment/deployment-detail/deployment-detail.component';
import {OverviewComponent} from './overview/overview.component';
import {ServiceComponent} from './service/service.component';
import {MonitorModule} from '../monitor/monitor.module';
import {PodComponent} from './pod/pod.component';
import {PodDetailComponent} from './pod/pod-detail/pod-detail.component';
import {ServiceDetailComponent} from './service/service-detail/service-detail.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
  children: [
  {path: '', component: OverviewComponent},
  {path: 'pods', component: PodComponent},
  {path: 'pod', component: PodDetailComponent},
  {path: 'deployments', component: DeploymentComponent},
  {path: 'deployment', component: DeploymentDetailComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'service', component: ServiceDetailComponent},
  {path: 'monitor', component: MonitorModule},
  {path: 'cluster', component: ClusterComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
