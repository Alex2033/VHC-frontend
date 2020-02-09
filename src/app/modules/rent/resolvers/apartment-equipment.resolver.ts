import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ApiService} from '../../../shared/services/api.service';
import {Service} from '../../../shared/contracts/service';
import {ApartmentEquipmentElement} from '../../../shared/contracts/apartment-equipment-element';

@Injectable()
export class ApartmentEquipmentResolver implements Resolve<ApartmentEquipmentElement[]> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ApartmentEquipmentElement[]> {
    return this.api.getApartmentEquipment();
  }
}
