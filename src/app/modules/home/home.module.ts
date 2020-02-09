import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { FirstScreenComponent } from './components/index/first-screen/first-screen.component';
import { AdvantagesComponent } from './components/index/advantages/advantages.component';
import { DescriptionComponent } from './components/index/description/description.component';
import { ServicesComponent } from './components/index/services/services.component';
import { LocationComponent } from './components/index/location/location.component';
import { BannerComponent } from './components/index/banner/banner.component';
import { EventsComponent } from './components/index/events/events.component';
import { ApartmentsComponent } from './components/index/apartments/apartments.component';
import {ServicesResolver} from './resolvers/services.resolver';


@NgModule({
  declarations: [
    IndexComponent,
    FirstScreenComponent,
    AdvantagesComponent,
    DescriptionComponent,
    ServicesComponent,
    LocationComponent,
    BannerComponent,
    EventsComponent,
    ApartmentsComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [
    ServicesResolver
  ]
})
export class HomeModule { }
