import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import {ApartmentEquipmentResolver} from './resolvers/apartment-equipment.resolver';
import {ApartmentsResolver} from './resolvers/apartments.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      'apartment_equipment': ApartmentEquipmentResolver,
      'apartments': ApartmentsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutingModule { }
