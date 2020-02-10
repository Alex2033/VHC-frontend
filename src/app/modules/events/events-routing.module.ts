import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import {EventsResolver} from './resolvers/events.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      events: EventsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
