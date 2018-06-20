import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobListComponent} from './job-list/job-list.component';
import {JobDetailComponent} from './job-detail/job-detail.component';

const routes: Routes = [{
  path: '', component: JobListComponent,
},
  {  path: ':namespace/:name', component: JobDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
