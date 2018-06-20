import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodesAllComponent } from './nodes-all/nodes-all.component';
import { NodesDetailComponent } from './nodes-detail/nodes-detail.component';
import {NodeRoutingModule} from './node-routing.module';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {K8sModule} from '../k8s.module';

@NgModule({
  imports: [
    CommonModule,
    NodeRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    K8sModule
  ],
  declarations: [NodesAllComponent, NodesDetailComponent]
})
export class NodesModule { }
