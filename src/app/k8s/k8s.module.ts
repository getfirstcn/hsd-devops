import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KvPipe } from './pipes/kv.pipe';
import { LabelPipe } from './pipes/label.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [KvPipe, LabelPipe],
  exports: [KvPipe, LabelPipe]
})
export class K8sModule { }
