import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ServiceRoutingModule } from './service-routing.module';
import { IndexComponent } from './components/index/index.component';
import {ServiceGroupsResolver} from './resolvers/service-groups.resolver';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    ServiceRoutingModule
  ],
  providers: [
    ServiceGroupsResolver
  ]
})
export class ServiceModule { }
