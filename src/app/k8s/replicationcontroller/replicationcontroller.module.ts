import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplicationcontrollerRoutingModule } from './replicationcontroller-routing.module';
import { ReplicationctrollerListComponent } from './replicationctroller-list/replicationctroller-list.component';
import { ReplicationctrollerDetailComponent } from './replicationctroller-detail/replicationctroller-detail.component';
import {K8sModule} from '../k8s.module';
import {PodsModule} from '../pods/pods.module';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReplicationcontrollerRoutingModule,
    K8sModule,
    PodsModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ReplicationctrollerListComponent, ReplicationctrollerDetailComponent]
})
export class ReplicationcontrollerModule { }
