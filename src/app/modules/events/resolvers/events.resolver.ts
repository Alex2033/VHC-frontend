import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ShortTermRentApartment} from '../../../shared/contracts/short-term-rent-apartment';
import {ApiService} from '../../../shared/services/api.service';
import {Event} from '../../../shared/contracts/event';

@Injectable()
export class EventsResolver implements Resolve<Event[]> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Event[]> {
    return this.api.getEvents();
  }
}
