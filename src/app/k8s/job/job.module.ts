import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import {K8sModule} from '../k8s.module';
import {MaterialModule} from '../material.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';

@NgModule({
  imports: [
    CommonModule,
    JobRoutingModule,
    K8sModule,
      MaterialModule
  ],
  declarations: [JobDetailComponent, JobListComponent]
})
export class JobModule { }
