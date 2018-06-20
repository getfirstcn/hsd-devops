import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IngressesAllComponent} from './ingresses-all/ingresses-all.component';
import {IngressesDetailComponent} from './ingresses-detail/ingresses-detail.component';

const routes: Routes = [
  {path: '', component: IngressesAllComponent},
  {path: ':namespace/:name', component: IngressesDetailComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class IngressesRoutingModule { }
