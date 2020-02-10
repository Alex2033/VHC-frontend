import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../shared/services/api.service';
import {ServiceGroup} from '../../../shared/contracts/service-group';
import {BusinessSpace} from '../../../shared/contracts/business-space';

@Injectable()
export class BusinessSpacesResolver implements Resolve<BusinessSpace[]> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<BusinessSpace[]> {
    return this.api.getBusinessSpaces();
  }
}
