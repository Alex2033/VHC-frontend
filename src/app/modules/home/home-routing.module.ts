import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ServicesResolver } from './resolvers/services.resolver';
import { ApartmentsResolver } from './resolvers/apartments.resolver';
import { EventsResolver } from './resolvers/events.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      services: ServicesResolver,
      apartments: ApartmentsResolver,
      events: EventsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
