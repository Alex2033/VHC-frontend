import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DocsRoutingModule } from './docs-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    DocsRoutingModule
  ]
})
export class DocsModule { }
