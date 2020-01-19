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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
