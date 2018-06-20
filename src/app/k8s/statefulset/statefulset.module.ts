import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatefulsetRoutingModule } from './statefulset-routing.module';
import { StatefulsetDetailComponent } from './statefulset-detail/statefulset-detail.component';
import { StatefulsetsListComponent } from './statefulsets-list/statefulsets-list.component';
import { StatefulsetsReplaceComponent } from './statefulsets-replace/statefulsets-replace.component';
import {K8sModule} from '../k8s.module';
import {MaterialModule} from '../material.module';
import {PodsModule} from '../pods/pods.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StatefulsetRoutingModule,
    K8sModule,
    MaterialModule,
    PodsModule,
    FormsModule
  ],
  declarations: [StatefulsetDetailComponent, StatefulsetsListComponent, StatefulsetsReplaceComponent]
})
export class StatefulsetModule { }
