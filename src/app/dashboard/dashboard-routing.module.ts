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
import {ApplicationStepperComponent} from './application/application-stepper/application-stepper.component';
import {LogComponent} from './pod/log/log.component';
import {NamespaceComponent} from './namespace/namespace.component';
import {NamespaceDetailComponent} from './namespace/namespace-detail/namespace-detail.component';
import {NodeComponent} from './node/node.component';
import {PersistentVolumesComponent} from './persistent-volumes/persistent-volumes.component';
import {CronJobsComponent} from './cron-jobs/cron-jobs.component';
import {SecretComponent} from './secret/secret.component';
import {SecretDetailComponent} from './secret/secret-detail/secret-detail.component';
import {ReplicationControllersComponent} from './replication-controllers/replication-controllers.component';
import {DaemonSetsComponent} from './daemon-sets/daemon-sets.component';
import {JobComponent} from './job/job.component';
import {IngressComponent} from './ingress/ingress.component';
import {ConfigMapsComponent} from './config-maps/config-maps.component';
import {ConfigMapDetailComponent} from './config-maps/config-map-detail/config-map-detail.component';
import {PersistentVolumeClaimsComponent} from './persistent-volume-claims/persistent-volume-claims.component';
import {
  PersistentVolumeClaimDetailComponent
} from './persistent-volume-claims/persistent-volume-claim-detail/persistent-volume-claim-detail.component';
import {IngressDetailComponent} from './ingress/ingress-detail/ingress-detail.component';
import {DaemonSetDetailComponent} from './daemon-sets/daemon-set-detail/daemon-set-detail.component';
import {ReplicaSet} from './replica-sets/replica-set';
import {ReplicaSetsComponent} from './replica-sets/replica-sets.component';
import {ReplicasetDetailComponent} from './replica-sets/replicaset-detail/replicaset-detail.component';
import {NodeDetailComponent} from './node/node-detail/node-detail.component';
import {DeploymentReplaceComponent} from './deployment/deployment-replace/deployment-replace.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
  children: [
  {path: '', component: OverviewComponent},
  {path: 'log/:namespace/:name', component: LogComponent},
  {path: 'pods', component: PodComponent},
  {path: 'pod/:namespace/:name', component: PodDetailComponent},
  {path: 'deployments', component: DeploymentComponent},
  {path: 'deployment/:namespace/:name', component: DeploymentDetailComponent},
  {path: 'deploymentreplace', component: DeploymentReplaceComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'service/:namespace/:name', component: ServiceDetailComponent},
  {path: 'ingresses', component: IngressComponent},
  {path: 'ingress/:namespace/:name', component: IngressDetailComponent},
  {path: 'application', component: ApplicationStepperComponent},
  {path: 'replicasets', component: ReplicaSetsComponent},
  {path: 'replicaset/:namespace/:name', component: ReplicasetDetailComponent},
  {path: 'statefulsets', component: DaemonSetsComponent},
  {path: 'statefulset/:namespace/:name', component: DaemonSetDetailComponent},
  {path: 'jobs', component: JobComponent},
  {path: 'cronjobs', component: CronJobsComponent},
  {path: 'replicationcontrollers', component: ReplicationControllersComponent},
  {path: 'monitor', component: MonitorModule},
  {path: 'persistentvolumes', component: PersistentVolumesComponent},
  {path: 'cronjobs', component: CronJobsComponent},
  {path: 'secrets', component: SecretComponent},
  {path: 'secret/:namespace/:name', component: SecretDetailComponent},
  {path: 'configmaps', component: ConfigMapsComponent},
  {path: 'configmap/:namespace/:name', component: ConfigMapDetailComponent},
  {path: 'persistentvolumeclaims', component: PersistentVolumeClaimsComponent},
  {path: 'persistentvolumeclaim/:namespace/:name', component: PersistentVolumeClaimDetailComponent},
  {path: 'namespace', component: NamespaceComponent},
  {path: 'namespace/:name', component: NamespaceDetailComponent},
  {path: 'nodes', component: NodeComponent},
  {path: 'node/:name', component: NodeDetailComponent},
  {path: 'cluster', component: ClusterComponent},
  {path: '**', component: OverviewComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
