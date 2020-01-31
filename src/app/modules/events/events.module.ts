import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { EventsRoutingModule } from './events-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
