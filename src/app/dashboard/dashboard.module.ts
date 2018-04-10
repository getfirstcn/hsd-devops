import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {MaterialModule} from '../material.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavListComponent } from './layout/sidenav-list/sidenav-list.component';
import {HttpClientModule} from '@angular/common/http';

import { ClusterComponent } from './cluster/cluster.component';
import {DeploymentComponent} from './deployment/deployment.component';
import {OverviewComponent} from './overview/overview.component';
import {ServiceComponent} from './service/service.component';
import { KvPipe } from './pipes/kv.pipe';
import { DeploymentDetailComponent } from './deployment/deployment-detail/deployment-detail.component';
import { PodComponent } from './pod/pod.component';
import { PodDetailComponent } from './pod/pod-detail/pod-detail.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { PodWithLabelComponent } from './pod/pod-with-label/pod-with-label.component';
import { LabelPipe } from './pipes/label.pipe';

 // service
import {PodService} from './pod/pod.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    ClusterComponent,
    DeploymentComponent,
    LayoutComponent,
    OverviewComponent,
    ServiceComponent,
    HeaderComponent,
    SidenavListComponent,
    KvPipe,
    DeploymentDetailComponent,
    PodComponent,
    PodDetailComponent,
    ServiceDetailComponent,
    PodWithLabelComponent,
    LabelPipe,
  ],
  providers: [PodService]
})
export class DashboardModule { }
