import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {K8sModule} from '../k8s.module';
import { ServicesAllComponent } from './services-all/service-all.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceReplaceComponent } from './service-replace/service-replace.component';
import {ServicesRoutingModule} from './services-routing.module';
import {PodsModule} from '../pods/pods.module';
import {MatPaginatorIntl} from '@angular/material';
import {getDutchPaginatorIntl} from '../dutch-paginator.intl';
import {AceEditorModule} from 'ng2-ace-editor';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    PodsModule,
    MaterialModule,
    K8sModule,
    AceEditorModule
  ],
  declarations: [ServicesAllComponent, ServiceDetailComponent, ServiceReplaceComponent],
  providers: [{provide: MatPaginatorIntl,  useValue: getDutchPaginatorIntl()}],
  entryComponents: [ServiceReplaceComponent]
})
export class ServicesModule { }
