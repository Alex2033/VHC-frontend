import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ApiService} from '../../../shared/services/api.service';
import {Service} from '../../../shared/contracts/service';
import {ApartmentEquipmentElement} from '../../../shared/contracts/apartment-equipment-element';
import {LongTermRentApartment} from '../../../shared/contracts/long-term-rent-apartment';

@Injectable()
export class ApartmentsResolver implements Resolve<LongTermRentApartment[]> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<LongTermRentApartment[]> {
    return this.api.getLongTermRentApartments();
  }
}
