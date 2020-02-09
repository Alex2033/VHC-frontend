import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ApiService} from '../../../shared/services/api.service';
import {ServiceGroup} from '../../../shared/contracts/service-group';

@Injectable()
export class ServiceGroupsResolver implements Resolve<ServiceGroup[]> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ServiceGroup[]> {
    return this.api.getServiceGroups();
  }
}
