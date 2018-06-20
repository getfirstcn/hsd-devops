import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronjobRoutingModule } from './cronjob-routing.module';
import { CronjobListComponent } from './cronjob-list/cronjob-list.component';
import { CronjobDetailComponent } from './cronjob-detail/cronjob-detail.component';
import {K8sModule} from '../k8s.module';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    CronjobRoutingModule,
    K8sModule,
    MaterialModule
  ],
  declarations: [CronjobListComponent, CronjobDetailComponent]
})
export class CronjobModule { }
