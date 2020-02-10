import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ShortTermRentApartment} from '../../../shared/contracts/short-term-rent-apartment';
import {ApiService} from '../../../shared/services/api.service';

@Injectable()
export class ApartmentsResolver implements Resolve<ShortTermRentApartment[]> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ShortTermRentApartment[]> {
    return this.api.getShortTermRentApartments();
  }
}
