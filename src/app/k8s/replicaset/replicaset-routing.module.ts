import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReplicatsetListComponent} from './replicatset-list/replicatset-list.component';
import {ReplicatsetDetailComponent} from './replicatset-detail/replicatset-detail.component';

const routes: Routes = [
  {path: '', component: ReplicatsetListComponent},
  {path: ':namespace/:name', component: ReplicatsetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReplicasetRoutingModule { }
