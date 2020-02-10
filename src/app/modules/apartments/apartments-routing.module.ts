import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DetailComponent } from './components/detail/detail.component';
import {ApartmentResolver} from './resolvers/apartment.resolver';
import {ApartmentsResolver} from './resolvers/apartments.resolver';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      apartments: ApartmentsResolver
    }
  },
  {
    path: ':apartment',
    component: DetailComponent,
    resolve: {
      apartment: ApartmentResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentsRoutingModule { }
