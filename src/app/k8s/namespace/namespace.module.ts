import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamespacesAllComponent } from './namespaces-all/namespaces-all.component';
import { NamespaceDetailComponent } from './namespace-detail/namespace-detail.component';
import {NamespaceRoutingModule} from './namespace-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NamespaceRoutingModule
  ],
  declarations: [NamespacesAllComponent, NamespaceDetailComponent],
  exports: [NamespacesAllComponent, NamespaceDetailComponent]
})
export class NamespaceModule { }
