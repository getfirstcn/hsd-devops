import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', data: {preload: false}, loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  { path: 'monitor', data: {preload: false}, loadChildren: 'app/monitor/monitor.module#MonitorModule'},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
]
})
export class AppRoutingModule { }



