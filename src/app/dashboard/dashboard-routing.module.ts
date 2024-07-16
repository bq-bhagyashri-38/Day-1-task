import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbComComponent } from './db-com/db-com.component';

const routes: Routes = [
  { path: '', component: DbComComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
