import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppNavComponent} from './app-nav/app-nav.component';
import {AppMainComponent} from './app-main/app-main.component';
import {DeploymentsModule} from './k8s/deployments/deployments.module';
import {NamespaceModule} from './k8s/namespace/namespace.module';

const routes: Routes = [
  {path: 'k8s', component: AppNavComponent,
  children: [
    // {path: 'deployments', loadChildren: 'app/deployments/deployments.module#DeploymentsModule'},
    {path: 'deployments', loadChildren : () => DeploymentsModule},
    {path: 'namespace', loadChildren: () => NamespaceModule },
    {path: '', component: AppMainComponent}
  ],
  },
  {path: '', redirectTo: 'k8s', pathMatch: 'full'}
  // {path: 'namespace', loadChildren: () => NamespaceModule },
  // {path: 'deployments', loadChildren : () => DeploymentsModule},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
