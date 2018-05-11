import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';



@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
