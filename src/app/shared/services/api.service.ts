import {Injectable} from '@angular/core';
import {ApiClientService} from './api-client.service';
import {Observable, of} from 'rxjs';
import {ApartmentEquipmentElement} from '../contracts/apartment-equipment-element';
import {Service} from '../contracts/service';
import {ServiceGroup} from '../contracts/service-group';
import {DocumentGroup} from '../contracts/document-group';
import {BusinessSpace} from '../contracts/business-space';
import {LongTermRentApartment} from '../contracts/long-term-rent-apartment';
import {ShortTermRentApartment} from '../contracts/short-term-rent-apartment';
import {Event} from '../contracts/event';
import {map} from 'rxjs/operators';
import {deserialize} from '../functions/deseriale';
import {environment} from '../../../environments/environment';
import {BookingComData} from '../contracts/booking-com-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiClient: ApiClientService) {
  }

  getDocumentGroups(): Observable<DocumentGroup[]> {
    return this.apiClient.get('/api/site/apart_hotel_site/document_groups').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getServiceGroups(): Observable<ServiceGroup[]> {
    return this.apiClient.get('/api/site/apart_hotel_site/service_groups').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getServices(): Observable<Service[]> {
    return this.apiClient.get('/api/site/apart_hotel_site/services').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getApartmentEquipment(): Observable<ApartmentEquipmentElement[]> {
    return this.apiClient.get('/api/site/apart_hotel_site/apartment_equipment').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getBusinessSpaces(): Observable<BusinessSpace[]> {
    return this.apiClient.get('/api/site/apart_hotel_site/business_spaces').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getLongTermRentApartments(): Observable<LongTermRentApartment[]> {
    return this.apiClient.get('/api/site/apart_hotel_site/long_term_rent_apartments').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  };

  getShortTermRentApartments(): Observable<ShortTermRentApartment[]> {
    return this.apiClient.get('/api/site/apart_hotel_site/short_term_rent_apartments').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getShortTermRentApartment(apartmentId): Observable<ShortTermRentApartment> {
    return this.apiClient.get(`/api/site/apart_hotel_site/short_term_rent_apartments/${apartmentId}`).pipe(map((response) => {
      return deserialize(response) as ShortTermRentApartment;
    }));
  }

  getEvents(count = 0): Observable<Event[]> {
    return this.apiClient.get('/api/site/apart_hotel_site/events', {
      params: {
        count
      }
    }).pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  sendBusinessSpaceRequest(data) {
    return this.apiClient.post('/api/site/apart_hotel_site/business_space_requests', data);
  }

  sendApartmentViewRequest(data) {
    return this.apiClient.post('/api/site/apart_hotel_site/apartment_view_requests', data);
  }

  getBookingComData(): Observable<BookingComData> {
    return this.apiClient.get(`/api/site/apart_hotel_site/booking_data`).pipe(map((response) => {
      return deserialize(response) as BookingComData;
    }));
  }
}
