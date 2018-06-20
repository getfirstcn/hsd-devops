import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamespacesAllComponent } from './namespaces-all/namespaces-all.component';
import { NamespaceDetailComponent } from './namespace-detail/namespace-detail.component';
import {NamespaceRoutingModule} from './namespace-routing.module';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    NamespaceRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [NamespacesAllComponent, NamespaceDetailComponent],
  exports: [NamespacesAllComponent, NamespaceDetailComponent]
})
export class NamespaceModule { }
