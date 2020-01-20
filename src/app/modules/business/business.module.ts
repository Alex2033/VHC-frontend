import { NgModule } from '@angular/core';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { BusinessRoutingModule } from './business-routing.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
