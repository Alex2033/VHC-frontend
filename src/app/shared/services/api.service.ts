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

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiClient: ApiClientService) {
  }

  getDocumentGroups(): Observable<DocumentGroup[]> {
    return this.apiClient.get('/site/apart_hotel_site/document_groups').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getServiceGroups(): Observable<ServiceGroup[]> {
    return this.apiClient.get('/site/apart_hotel_site/service_groups').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getServices(): Observable<Service[]> {
    return this.apiClient.get('/site/apart_hotel_site/services').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getApartmentEquipment(): Observable<ApartmentEquipmentElement[]> {
    return this.apiClient.get('/site/apart_hotel_site/apartment_equipment').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getBusinessSpaces(): Observable<BusinessSpace[]> {
    return this.apiClient.get('/site/apart_hotel_site/business_spaces').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getLongTermRentApartments(): Observable<LongTermRentApartment[]> {
    return this.apiClient.get('/site/apart_hotel_site/long_term_rent_apartments').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  };

  getShortTermRentApartments(): Observable<ShortTermRentApartment[]> {
    return this.apiClient.get('/site/apart_hotel_site/short_term_rent_apartments').pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }

  getShortTermRentApartment(apartmentId): Observable<ShortTermRentApartment> {
    return this.apiClient.get(`/site/apart_hotel_site/short_term_rent_apartments/${apartmentId}`).pipe(map((response) => {
      return deserialize(response) as ShortTermRentApartment;
    }));
    return of(
      {
        id: 1,
        name: 'Двухместный номер 1 кроватью',
        description: 'Номер повышенной комфортности с большой двуспальной кроватью. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
        area: 24,
        guestsCount: 2,
        imageXl: 'assets/images/pages/apartment/room.jpg',
        imageLg: 'assets/images/pages/apartment/room.jpg',
        imageMd: 'assets/images/pages/apartment/room.jpg',
        imageSm: 'assets/images/pages/apartment/room.jpg',
        imagesXl: [
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
        ],
        imagesLg: [
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
        ],
        imagesMd: [
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
        ],
        imagesSm: [
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
        ],
        features: [
          {
            iconUrl: '/assets/icons/ico-video.svg',
            name: 'видео/аудио',
            description: 'Спутниковое телевидение, телевизор, цифровое тв, телевизор с плоским экраном'
          },
          {
            iconUrl: '/assets/icons/ico-img.svg',
            name: 'окружение',
            description: 'Вид на город,  двор, достопримечательности города'
          },
          {
            iconUrl: '/assets/icons/ico-lamp.svg',
            name: 'электроника',
            description: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
          },
          {
            iconUrl: '/assets/icons/ico-furniture.svg',
            name: 'Мебель',
            description: 'Багажная тумба, вешалки, гардеробная, журнальный столик, зеркало, обеденный стол,  стулья, туалетный столик, кровать, шкаф-купе'
          },
          {
            iconUrl: '/assets/icons/ico-internet.svg',
            name: 'Интернет и телефония',
            description: 'Wi-Fi, интернет, телефон, внутренний телефон'
          },
          {
            iconUrl: '/assets/icons/ico-bathroom.svg',
            name: 'Ванная комната',
            description: 'Банные полотенца, банные принадлежности, раковина, санузел, туалет, туалетные средства, унитаз'
          },
          {
            iconUrl: '/assets/icons/ico-video.svg',
            name: 'видео/аудио',
            description: 'Спутниковое телевидение, телевизор, цифровое тв, телевизор с плоским экраном'
          },
          {
            iconUrl: '/assets/icons/ico-img.svg',
            name: 'окружение',
            description: 'Вид на город,  двор, достопримечательности города'
          },
          {
            iconUrl: '/assets/icons/ico-lamp.svg',
            name: 'электроника',
            description: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
          },
          {
            iconUrl: '/assets/icons/ico-furniture.svg',
            name: 'Мебель',
            description: 'Багажная тумба, вешалки, гардеробная, журнальный столик, зеркало, обеденный стол,  стулья, туалетный столик, кровать, шкаф-купе'
          },
          {
            iconUrl: '/assets/icons/ico-internet.svg',
            name: 'Интернет и телефония',
            description: 'Wi-Fi, интернет, телефон, внутренний телефон'
          },
          {
            iconUrl: '/assets/icons/ico-lamp.svg',
            name: 'электроника',
            description: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
          },
          {
            iconUrl: '/assets/icons/ico-bathroom.svg',
            name: 'Ванная комната',
            description: 'Банные полотенца, банные принадлежности, раковина, санузел, туалет, туалетные средства, унитаз'
          }
        ],
        advantages: [
          {
            name: 'Кондиционер',
            iconUrl: '/assets/icons/ico-snow.svg'
          },
          {
            name: 'Вид на город',
            iconUrl: '/assets/icons/ico-build.svg'
          },
          {
            name: 'Бесплатный Wi–Fi',
            iconUrl: '/assets/icons/ico-wifi.svg'
          },
          {
            name: 'Вид на двор',
            iconUrl: '/assets/icons/ico-img.svg'
          }
        ]
      }
    );
  }

  getEvents(count = 0): Observable<Event[]> {
    return this.apiClient.get('/site/apart_hotel_site/events', {
      params: {
        count
      }
    }).pipe(map((response) => {
      return response.map(item => {
        return deserialize(item);
      });
    }));
  }
}
