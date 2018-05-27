import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeploymentsRoutingModule} from './deployments-routing.module';
import { DeploymentsAllComponent } from './deployments-all/deployments-all.component';
import { DeploymentDetailComponent } from './deployment-detail/deployment-detail.component';
import {
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatTableModule,
  MatDialogModule,
  MatGridListModule
} from '@angular/material';
import {K8sModule} from '../k8s.module';
import {getDutchPaginatorIntl} from '../dutch-paginator.intl';
import {HttpClientModule} from '@angular/common/http';
import { DeploymentReplaceComponent } from './deployment-replace/deployment-replace.component';

@NgModule({
  imports: [
    CommonModule,
    K8sModule,
    DeploymentsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatGridListModule
  ],
  declarations: [DeploymentsAllComponent, DeploymentDetailComponent, DeploymentReplaceComponent],
  exports: [DeploymentDetailComponent, DeploymentsAllComponent],
  providers: [{provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl()}],
  entryComponents: [DeploymentReplaceComponent]
})
export class DeploymentsModule { }
