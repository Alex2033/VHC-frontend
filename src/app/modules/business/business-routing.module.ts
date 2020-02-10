import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import {BusinessSpacesResolver} from './resolvers/business-spaces.resolver';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      'business_spaces': BusinessSpacesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
