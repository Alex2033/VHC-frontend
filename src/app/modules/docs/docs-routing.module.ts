import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import {DocumentGroupsResolver} from './resolvers/document-groups.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      'document_groups': DocumentGroupsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
