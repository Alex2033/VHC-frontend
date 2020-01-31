import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ServiceRoutingModule } from './service-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
