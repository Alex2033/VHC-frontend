import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    SharedModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
