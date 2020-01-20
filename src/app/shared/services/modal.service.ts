import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalConfiguration } from '../models/modal-configuration';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  current: Subject<ModalConfiguration | null> = new Subject();
  showConfirm: boolean = false;
  confirmSubject: Subject<boolean>;
  constructor() { }
  open(id: string, parameters?: Object) {
    const configuration = new ModalConfiguration();
    configuration.id = id;
    configuration.parameters = parameters;
    this.current.next(configuration);
  }
  close() {
    this.current.next(null);
  }
  // confirm(text: string): Observable<boolean> {
  //   this.open(
  //     'confirm',
  //     {
  //       text: text
  //     }
  //   );
  //   this.confirmSubject = new Subject();
  //   return this.confirmSubject;
  // }
  // closeConfirmWindow(result: boolean) {
  //   this.close();
  //   this.confirmSubject.next(result);
  //   this.confirmSubject.complete();
  //   delete this.confirmSubject;
  // }
}
