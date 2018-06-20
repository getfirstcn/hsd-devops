import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplicasetRoutingModule } from './replicaset-routing.module';
import { ReplicatsetListComponent } from './replicatset-list/replicatset-list.component';
import { ReplicatsetDetailComponent } from './replicatset-detail/replicatset-detail.component';
import {MaterialModule} from '../material.module';
import {K8sModule} from '../k8s.module';
import {FormsModule} from '@angular/forms';
import {PodsModule} from '../pods/pods.module';

@NgModule({
  imports: [
    CommonModule,
    ReplicasetRoutingModule,
    MaterialModule,
    K8sModule,
    FormsModule,
    PodsModule
  ],
  declarations: [ReplicatsetListComponent, ReplicatsetDetailComponent]
})
export class ReplicasetModule { }
