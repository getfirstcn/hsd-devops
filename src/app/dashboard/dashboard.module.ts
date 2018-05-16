import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {MaterialModule} from '../material.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavListComponent } from './layout/sidenav-list/sidenav-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MonacoEditorModule} from 'ngx-monaco-editor';

import { ClusterComponent } from './cluster/cluster.component';
import {DeploymentComponent} from './deployment/deployment.component';
import {OverviewComponent} from './overview/overview.component';
import {ServiceComponent} from './service/service.component';
import {NamespaceComponent} from './namespace/namespace.component';
import { KvPipe } from './pipes/kv.pipe';
import { DeploymentDetailComponent } from './deployment/deployment-detail/deployment-detail.component';
import { PodComponent } from './pod/pod.component';
import { PodDetailComponent } from './pod/pod-detail/pod-detail.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { PodWithLabelComponent } from './pod/pod-with-label/pod-with-label.component';
import { LabelPipe } from './pipes/label.pipe';
import {NamespaceService} from './namespace/namespace.service';
import {getDutchPaginatorIntl} from './secret/dutch-paginator.intl';

 // service
import {PodService} from './pod/pod.service';
import { ApplicationComponent } from './application/application.component';
import { ApplicationButtonComponent } from './application/application-button/application-button.component';
import { ApplicationDialogComponent } from './application/application-dialog/application-dialog.component';
import { ApplicationStepperComponent } from './application/application-stepper/application-stepper.component';
import { LogComponent } from './pod/log/log.component';
import { NamespaceDetailComponent } from './namespace/namespace-detail/namespace-detail.component';
import { NodeComponent } from './node/node.component';
import { NodeDetailComponent } from './node/node-detail/node-detail.component';
import { PersistentVolumesComponent } from './persistent-volumes/persistent-volumes.component';
import { CronJobsComponent } from './cron-jobs/cron-jobs.component';
import { DaemonSetsComponent } from './daemon-sets/daemon-sets.component';
import { ReplicaSetsComponent } from './replica-sets/replica-sets.component';
import { ReplicationControllersComponent } from './replication-controllers/replication-controllers.component';
import { IngressComponent } from './ingress/ingress.component';
import { ConfigMapsComponent } from './config-maps/config-maps.component';
import { SecretComponent } from './secret/secret.component';
import { SecretDetailComponent } from './secret/secret-detail/secret-detail.component';
import { JobComponent } from './job/job.component';
import { PersistentVolumeClaimsComponent } from './persistent-volume-claims/persistent-volume-claims.component';
import {MatPaginatorIntl} from '@angular/material';
import { PersistentVolumeClaimDetailComponent } from './persistent-volume-claims/persistent-volume-claim-detail/persistent-volume-claim-detail.component';
import { ConfigMapDetailComponent } from './config-maps/config-map-detail/config-map-detail.component';
import { IngressDetailComponent } from './ingress/ingress-detail/ingress-detail.component';
import { DaemonSetDetailComponent } from './daemon-sets/daemon-set-detail/daemon-set-detail.component';
import { ReplicasetDetailComponent } from './replica-sets/replicaset-detail/replicaset-detail.component';
import { DeploymentReplaceComponent } from './deployment/deployment-replace/deployment-replace.component';
import { ServiceReplaceComponent } from './service/service-replace/service-replace.component';
import { IngressReplaceComponent } from './ingress/ingress-replace/ingress-replace.component';
import { ApplicationYamlComponent } from './application/application-yaml/application-yaml.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MonacoEditorModule.forRoot()
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
    ApplicationComponent,
    ApplicationButtonComponent,
    ApplicationDialogComponent,
    ApplicationStepperComponent,
    LogComponent,
    NamespaceComponent,
    NamespaceDetailComponent,
    NodeComponent,
    NodeDetailComponent,
    PersistentVolumesComponent,
    CronJobsComponent,
    DaemonSetsComponent,
    ReplicaSetsComponent,
    ReplicationControllersComponent,
    IngressComponent,
    ConfigMapsComponent,
    SecretComponent,
    SecretDetailComponent,
    JobComponent,
    PersistentVolumeClaimsComponent,
    PersistentVolumeClaimDetailComponent,
    ConfigMapDetailComponent,
    IngressDetailComponent,
    DaemonSetDetailComponent,
    ReplicasetDetailComponent,
    DeploymentReplaceComponent,
    ServiceReplaceComponent,
    IngressReplaceComponent,
    ApplicationYamlComponent,
  ],
  providers: [PodService, NamespaceService, {provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl()}],
  entryComponents: [ApplicationButtonComponent, ApplicationDialogComponent, LogComponent, IngressReplaceComponent, ApplicationYamlComponent]
})
export class DashboardModule { }
