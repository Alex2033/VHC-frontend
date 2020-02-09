import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import {ServiceGroupsResolver} from './resolvers/service-groups.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      'service_groups': ServiceGroupsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
