import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NamespacesAllComponent} from './namespaces-all/namespaces-all.component';
import {NamespaceDetailComponent} from './namespace-detail/namespace-detail.component';

const namespaceRoutes: Routes = [
  {path: '', component: NamespacesAllComponent},
  {path: ':name', component: NamespaceDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(namespaceRoutes)
  ],
  exports: [RouterModule]
})
export class NamespaceRoutingModule { }
