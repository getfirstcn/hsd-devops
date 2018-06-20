import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersistentvolumeclaimListComponent} from './persistentvolumeclaim-list/persistentvolumeclaim-list.component';
import {PersistentvolumeclaimDetailComponent} from './persistentvolumeclaim-detail/persistentvolumeclaim-detail.component';

const routes: Routes = [
  {path: '', component: PersistentvolumeclaimListComponent},
  {path: ':namespace/:name', component: PersistentvolumeclaimDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersistentvolumeclaimRoutingModule { }
