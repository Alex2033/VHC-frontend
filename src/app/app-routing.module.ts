import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'apartments',
    loadChildren: () => import('./modules/apartments/apartments.module').then(mod => mod.ApartmentsModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./modules/business/business.module').then(mod => mod.BusinessModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./modules/service/service.module').then(mod => mod.ServiceModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/events/events.module').then(mod => mod.EventsModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./modules/docs/docs.module').then(mod => mod.DocsModule)
  },
  {
    path: 'rent',
    loadChildren: () => import('./modules/rent/rent.module').then(mod => mod.RentModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./modules/contacts/contacts.module').then(mod => mod.ContactsModule)
  },
  {
    path: '404',
    loadChildren: () => import('./modules/not-found/not-found.module').then(mod => mod.NotFoundModule)
  },
  {
    path: '**', 
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled',
      urlUpdateStrategy: 'eager',
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabled'
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
