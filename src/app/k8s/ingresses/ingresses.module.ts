import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngressesAllComponent } from './ingresses-all/ingresses-all.component';
import { IngressesDetailComponent } from './ingresses-detail/ingresses-detail.component';
import { IngressesReplaceComponent } from './ingresses-replace/ingresses-replace.component';
import {IngressesRoutingModule} from './ingresses-routing.module';
import {K8sModule} from '../k8s.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    IngressesRoutingModule,
    K8sModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [IngressesAllComponent, IngressesDetailComponent, IngressesReplaceComponent]
})
export class IngressesModule { }
