import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReplicationctrollerListComponent} from './replicationctroller-list/replicationctroller-list.component';
import {ReplicationctrollerDetailComponent} from './replicationctroller-detail/replicationctroller-detail.component';

const routes: Routes = [
  {path: '', component: ReplicationctrollerListComponent},
  {path: ':name/:namespace', component: ReplicationctrollerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReplicationcontrollerRoutingModule { }
