import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigmapListComponent} from './configmap-list/configmap-list.component';
import {ConfigmapDetailComponent} from './configmap-detail/configmap-detail.component';

const routes: Routes = [
  {path: '', component: ConfigmapListComponent},
  {path: ':namespace/:name', component: ConfigmapDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigmapRoutingModule { }
