import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import {ServicesResolver} from './resolvers/services.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      services: ServicesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
