import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { RentRoutingModule } from './rent-routing.module';
import { IndexComponent } from './components/index/index.component';
import { FirstScreenComponent } from './components/index/first-screen/first-screen.component';
import { AdvantagesComponent } from './components/index/advantages/advantages.component';
import { RepairsComponent } from './components/index/repairs/repairs.component';
import { DescriptionComponent } from './components/index/description/description.component';
import { FeaturesComponent } from './components/index/features/features.component';
import { ApartmentsComponent } from './components/index/apartments/apartments.component';
import {ApartmentEquipmentResolver} from './resolvers/apartment-equipment.resolver';
import {ApartmentsResolver} from './resolvers/apartments.resolver';


@NgModule({
  declarations: [
    IndexComponent, 
    FirstScreenComponent, 
    AdvantagesComponent, 
    RepairsComponent, 
    DescriptionComponent, 
    FeaturesComponent, 
    ApartmentsComponent
  ],
  imports: [
    SharedModule,
    RentRoutingModule
  ],
  providers: [
    ApartmentEquipmentResolver,
    ApartmentsResolver
  ]
})
export class RentModule { }
