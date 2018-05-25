import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeploymentsRoutingModule} from './deployments-routing.module';
import { DeploymentsAllComponent } from './deployments-all/deployments-all.component';
import { DeploymentsDetailComponent } from './deployments-detail/deployments-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DeploymentsRoutingModule
  ],
  declarations: [DeploymentsAllComponent, DeploymentsDetailComponent]
})
export class DeploymentsModule { }
