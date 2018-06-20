import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersistentvolumeclaimRoutingModule } from './persistentvolumeclaim-routing.module';
import { PersistentvolumeclaimListComponent } from './persistentvolumeclaim-list/persistentvolumeclaim-list.component';
import { PersistentvolumeclaimDetailComponent } from './persistentvolumeclaim-detail/persistentvolumeclaim-detail.component';
import {K8sModule} from '../k8s.module';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PersistentvolumeclaimRoutingModule,
    K8sModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [PersistentvolumeclaimListComponent, PersistentvolumeclaimDetailComponent]
})
export class PersistentvolumeclaimModule { }
