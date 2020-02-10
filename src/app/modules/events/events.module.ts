import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { EventsRoutingModule } from './events-routing.module';
import { IndexComponent } from './components/index/index.component';
import {EventsResolver} from './resolvers/events.resolver';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    EventsRoutingModule
  ],
  providers: [
    EventsResolver
  ]
})
export class EventsModule { }
