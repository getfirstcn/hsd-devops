import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatefulsetsListComponent} from './statefulsets-list/statefulsets-list.component';
import {StatefulsetDetailComponent} from './statefulset-detail/statefulset-detail.component';

const routes: Routes = [
  {path: '', component: StatefulsetsListComponent},
  {path: ':namespace/:name', component: StatefulsetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatefulsetRoutingModule { }
