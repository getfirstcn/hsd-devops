import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeploymentsModule} from './deployments/deployments.module';

@NgModule({
  imports: [
    CommonModule,
    DeploymentsModule
  ],
  declarations: []
})
export class K8sModule { }
