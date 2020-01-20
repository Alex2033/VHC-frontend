import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
