import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServicesAllComponent} from './services-all/service-all.component';
import {ServiceDetailComponent} from './service-detail/service-detail.component';

const routes: Routes = [
  {path: '', component: ServicesAllComponent},
  {path: ':namespace/:name', component: ServiceDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
