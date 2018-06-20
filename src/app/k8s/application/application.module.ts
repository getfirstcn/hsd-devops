import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationButtonComponent } from './application-button/application-button.component';
import { ApplicationDialogComponent } from './application-dialog/application-dialog.component';
import { ApplicationComponent } from './application.component';
import {
  MatCardModule,
  MatDialogModule, MatDividerModule, MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTableModule,
  MatButtonModule, MatStepperModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {K8sModule} from '../k8s.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    K8sModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSelectModule
  ],
  declarations: [ApplicationButtonComponent, ApplicationDialogComponent, ApplicationComponent],
  exports: [ApplicationButtonComponent],
  entryComponents: [ApplicationDialogComponent]
})
export class ApplicationModule { }
