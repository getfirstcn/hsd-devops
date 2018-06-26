import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PodsRoutingModule} from './pods-routing.module';
import { PodsAllComponent } from './pods-all/pods-all.component';
import { PodsDetailComponent } from './pods-detail/pods-detail.component';
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
  MatFormFieldModule, MatDividerModule, MatListModule, MatButtonModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {K8sModule} from '../k8s.module';
import { PodsWithLabelComponent } from './pods-with-label/pods-with-label.component';
import { PodLogComponent } from './pod-log/pod-log.component';
import {AceEditorModule} from 'ng2-ace-editor';

@NgModule({
  imports: [
    CommonModule,
    PodsRoutingModule,
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
    K8sModule,
    AceEditorModule,
    MatButtonModule
  ],
  declarations: [PodsAllComponent, PodsDetailComponent, PodsWithLabelComponent, PodLogComponent],
  exports: [PodsWithLabelComponent],
  entryComponents: [PodLogComponent]
})
export class PodsModule { }
