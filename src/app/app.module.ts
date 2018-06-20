import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule } from './app-routing.module';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import {CodeEditorModule} from './code-editor/code-editor.module';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
} from '@angular/material';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppTableComponent } from './app-table/app-table.component';
import { AppMainComponent } from './app-main/app-main.component';
// import {getDutchPaginatorIntl} from './k8s/dutch-paginator.intl';
import {ApplicationModule} from './k8s/application/application.module';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppTableComponent,
    AppMainComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    MatSelectModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(),
    CodeEditorModule,
    ApplicationModule
  ],
  // providers: [{provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl()}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
