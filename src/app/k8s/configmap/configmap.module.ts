import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigmapRoutingModule } from './configmap-routing.module';
import { ConfigmapListComponent } from './configmap-list/configmap-list.component';
import { ConfigmapDetailComponent } from './configmap-detail/configmap-detail.component';
import { ConfigmapReplaceComponent } from './configmap-replace/configmap-replace.component';
import {MaterialModule} from '../material.module';
import {K8sModule} from '../k8s.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConfigmapRoutingModule,
    MaterialModule,
    K8sModule,
    FormsModule
  ],
  declarations: [ConfigmapListComponent, ConfigmapDetailComponent, ConfigmapReplaceComponent]
})
export class ConfigmapModule { }
