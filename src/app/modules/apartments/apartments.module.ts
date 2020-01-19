import { NgModule } from '@angular/core';
import { ApartmentsRoutingModule } from './apartments-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    ApartmentsRoutingModule
  ]
})
export class ApartmentsModule { }
