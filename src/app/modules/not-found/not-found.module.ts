import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundRoutingModule } from './not-found-routing.module';

import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    SharedModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
