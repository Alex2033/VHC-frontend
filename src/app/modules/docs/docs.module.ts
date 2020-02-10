import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DocsRoutingModule } from './docs-routing.module';
import { IndexComponent } from './components/index/index.component';
import { DocumentGroupsResolver } from './resolvers/document-groups.resolver';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    DocsRoutingModule
  ],
  providers: [
    DocumentGroupsResolver
  ]
})
export class DocsModule { }
