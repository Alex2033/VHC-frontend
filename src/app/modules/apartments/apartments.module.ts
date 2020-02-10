import { NgModule } from '@angular/core';
import { ApartmentsRoutingModule } from './apartments-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';
import {ApartmentResolver} from './resolvers/apartment.resolver';
import {ApartmentsResolver} from './resolvers/apartments.resolver';


@NgModule({
  declarations: [IndexComponent, DetailComponent],
  imports: [
    SharedModule,
    ApartmentsRoutingModule
  ],
  providers: [
    ApartmentResolver,
    ApartmentsResolver
  ]
})
export class ApartmentsModule { }
