import { NgModule } from '@angular/core';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { BusinessRoutingModule } from './business-routing.module';
import {BusinessSpacesResolver} from './resolvers/business-spaces.resolver';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    BusinessRoutingModule
  ],
  providers: [
    BusinessSpacesResolver
  ]
})
export class BusinessModule { }
