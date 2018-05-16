import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatCardModule,
  MatDialogModule,
  MatStepperModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
  MatExpansionModule

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
