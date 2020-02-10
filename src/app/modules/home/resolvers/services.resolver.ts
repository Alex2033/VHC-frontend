import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ApiService} from '../../../shared/services/api.service';
import {Service} from '../../../shared/contracts/service';

@Injectable()
export class ServicesResolver implements Resolve<Service[]> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Service[]> {
    return this.api.getServices();
  }
}
