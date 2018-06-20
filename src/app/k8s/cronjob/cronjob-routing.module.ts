import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CronjobListComponent} from './cronjob-list/cronjob-list.component';
import {CronjobDetailComponent} from './cronjob-detail/cronjob-detail.component';

const routes: Routes = [
  {
    path: '', component: CronjobListComponent
  },
  {path: ':namespace/:name', component: CronjobDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronjobRoutingModule { }
