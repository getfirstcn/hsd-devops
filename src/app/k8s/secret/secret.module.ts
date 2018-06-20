import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretRoutingModule } from './secret-routing.module';
import { SecretsListComponent } from './secrets-list/secrets-list.component';
import { SecretsDetailComponent } from './secrets-detail/secrets-detail.component';
import {K8sModule} from '../k8s.module';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SecretRoutingModule,
    K8sModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [SecretsListComponent, SecretsDetailComponent]
})
export class SecretModule { }
