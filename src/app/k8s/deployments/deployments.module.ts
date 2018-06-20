import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeploymentsRoutingModule} from './deployments-routing.module';
import { DeploymentsAllComponent } from './deployments-all/deployments-all.component';
import { DeploymentDetailComponent } from './deployment-detail/deployment-detail.component';
import {FormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatTableModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule, MatDividerModule, MatListModule, MatStepperModule,
} from '@angular/material';
// import {MonacoEditorModule} from 'ngx-monaco-editor';
import {K8sModule} from '../k8s.module';
import {PodsModule} from '../pods/pods.module';
import {getDutchPaginatorIntl} from '../dutch-paginator.intl';
import {HttpClientModule} from '@angular/common/http';
import {DeploymentReplaceComponent} from './deployment-replace/deployment-replace.component';
// import {CodeEditorModule} from '../../code-editor/code-editor.module';


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
    MatGridListModule,
    // CodeEditorModule
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    PodsModule,
    MatStepperModule
  ],
  declarations: [
    DeploymentsAllComponent,
    DeploymentDetailComponent,
    DeploymentReplaceComponent
  ],
  exports: [DeploymentDetailComponent, DeploymentsAllComponent],
  providers: [{provide: MatPaginatorIntl,  useValue: getDutchPaginatorIntl()}],
  // providers: [],
  entryComponents: [DeploymentReplaceComponent],
})
export class DeploymentsModule {}
