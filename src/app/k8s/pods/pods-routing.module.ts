import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PodsAllComponent} from './pods-all/pods-all.component';
import {PodsDetailComponent} from './pods-detail/pods-detail.component';

const routes: Routes = [
  {path: '', component: PodsAllComponent},
  {path: ':namespace/:name', component: PodsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodsRoutingModule { }
