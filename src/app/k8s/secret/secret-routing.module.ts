import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecretsListComponent} from './secrets-list/secrets-list.component';
import {SecretsDetailComponent} from './secrets-detail/secrets-detail.component';

const routes: Routes = [
  {path: '', component: SecretsListComponent},
  {path: ':namespace/:name', component: SecretsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretRoutingModule { }
