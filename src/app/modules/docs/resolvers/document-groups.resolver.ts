import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../shared/services/api.service';
import {ServiceGroup} from '../../../shared/contracts/service-group';
import {DocumentGroup} from '../../../shared/contracts/document-group';

@Injectable()
export class DocumentGroupsResolver implements Resolve<DocumentGroup[]> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<DocumentGroup[]> {
    return this.api.getDocumentGroups();
  }
}
