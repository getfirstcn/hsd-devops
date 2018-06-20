import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NodesAllComponent} from './nodes-all/nodes-all.component';
import {NodesDetailComponent} from './nodes-detail/nodes-detail.component';

const routes: Routes = [
  {path: '', component: NodesAllComponent},
  {path: ':name', component: NodesDetailComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class NodeRoutingModule { }
