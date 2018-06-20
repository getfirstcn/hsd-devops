import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppNavComponent} from './app-nav/app-nav.component';
import {AppMainComponent} from './app-main/app-main.component';
import {DeploymentsModule} from './k8s/deployments/deployments.module';
import {NamespaceModule} from './k8s/namespace/namespace.module';
import {AppTableComponent} from './app-table/app-table.component';
import {PodsModule} from './k8s/pods/pods.module';
import {ServicesModule} from './k8s/services/services.module';
import {IngressesModule} from './k8s/ingresses/ingresses.module';
import {NodesModule} from './k8s/nodes/nodes.module';
import {CronjobModule} from './k8s/cronjob/cronjob.module';
import {JobModule} from './k8s/job/job.module';
import {DaemonsetModule} from './k8s/daemonset/daemonset.module';
import {ReplicasetModule} from './k8s/replicaset/replicaset.module';
import {ReplicationcontrollerModule} from './k8s/replicationcontroller/replicationcontroller.module';
import {StatefulsetModule} from './k8s/statefulset/statefulset.module';
import {ConfigmapModule} from './k8s/configmap/configmap.module';
import {SecretModule} from './k8s/secret/secret.module';
import {PersistentvolumeclaimModule} from './k8s/persistentvolumeclaim/persistentvolumeclaim.module';

const routes: Routes = [
  {path: 'k8s', component: AppNavComponent,
  children: [
    // {path: 'deployments', loadChildren: 'app/deployments/deployments.module#DeploymentsModule'},
    {path: 'deployments', loadChildren : () => DeploymentsModule},
    {path: 'pods', loadChildren : () => PodsModule},
    {path: 'services', loadChildren : () => ServicesModule},
    {path: 'ingresses', loadChildren : () => IngressesModule},
    {path: 'daemonsets', loadChildren : () => DaemonsetModule},
    {path: 'replicasets', loadChildren : () => ReplicasetModule},
    {path: 'replicationcontrollers', loadChildren : () => ReplicationcontrollerModule},
    {path: 'statefulsets', loadChildren : () => StatefulsetModule},
    {path: 'namespaces', loadChildren: () => NamespaceModule },
    {path: 'nodes', loadChildren: () => NodesModule },
    {path: 'cronjobs', loadChildren: () => CronjobModule },
    {path: 'jobs', loadChildren: () => JobModule },
    {path: 'configmaps', loadChildren: () => ConfigmapModule},
    {path: 'secrets', loadChildren: () => SecretModule},
    {path: 'persistentvolumeclaims', loadChildren: () => PersistentvolumeclaimModule},
    {path: 'table', component: AppTableComponent },
    {path: '', component: AppMainComponent}
  ],
  },
  {path: '', redirectTo: 'k8s', pathMatch: 'full'}
  // {path: 'namespace', loadChildren: () => NamespaceModule },
  // {path: 'deployments', loadChildren : () => DeploymentsModule},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
