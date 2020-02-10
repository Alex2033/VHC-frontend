import {Injectable} from '@angular/core';
import {ApiClientService} from './api-client.service';
import {Observable, of} from 'rxjs';
import {ApartmentEquipmentElement} from '../contracts/apartment-equipment-element';
import {Service} from '../contracts/service';
import {ServiceGroup} from '../contracts/service-group';
import {DocumentGroup} from '../contracts/document-group';
import {BusinessSpace} from '../contracts/business-space';
import {LongTermRentApartment} from '../contracts/long-term-rent-apartment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiClient: ApiClientService) {
  }

  getDocumentGroups(): Observable<DocumentGroup[]> {
    return of(
      [
        {
          id: 1,
          name: 'Проектная декларация',
          documents: [
            {
              id: 1,
              name: 'Актуальная проектная декларация',
              file: 'http://vk.com.doc'
            },
            {
              id: 2,
              name: 'Проектная декларация',
              file: 'http://vk.com.pdf'
            },
          ]
        },
        {
          id: 2,
          name: 'Изменение в проектную документацию',
          documents: [
            {
              id: 3,
              name: 'Актуальная проектная декларация',
              file: 'http://vk.com.png'
            },
            {
              id: 4,
              name: 'Проектная декларация',
              file: 'http://vk.com.pdf'
            },
          ]
        },
        {
          id: 3,
          name: 'Прочие документы',
          documents: [
            {
              id: 5,
              name: 'Актуальная проектная декларация',
              file: 'http://vk.com.zip'
            },
            {
              id: 6,
              name: 'Проектная декларация',
              file: 'http://vk.com.pdf'
            },
          ]
        },
      ]
    );
  }

  getServiceGroups(): Observable<ServiceGroup[]> {
    return of(
      [
        {
          id: 1,
          name: 'Отдых',
          services: [
            {
              image: 'assets/images/service/restoran.jpg',
              name: 'SPA Салон'
            },
            {
              image: 'assets/images/service/kafe_i_bar.jpg',
              name: 'Ресторан'
            },
            {
              image: 'assets/images/service/fitness.jpg',
              name: 'Фитнес-клуб'
            }
          ]
        },
        {
          id: 2,
          name: 'Бытовые услуги',
          services: [
            {
              image: 'assets/images/service/restoran.jpg',
              name: 'SPA Салон'
            },
            {
              image: 'assets/images/service/fitness.jpg',
              name: 'Фитнес-клуб'
            }
          ]
        },
        {
          id: 3,
          name: 'Спорт',
          services: [
            {
              image: 'assets/images/service/restoran.jpg',
              name: 'SPA Салон'
            },
            {
              image: 'assets/images/service/kafe_i_bar.jpg',
              name: 'Ресторан'
            }
          ]
        }
      ]
    );
  }

  getServices(): Observable<Service[]> {
    return of(
      [
        {
          image: 'assets/images/service/restoran.jpg',
          name: 'Ресторан с банкетным залом'
        },
        {
          image: 'assets/images/service/kafe_i_bar.jpg',
          name: 'Кафе и бары'
        },
        {
          image: 'assets/images/service/fitness.jpg',
          name: 'Фитнес-клуб'
        },
        {
          image: 'assets/images/service/service-3.jpg',
          name: 'Бассейн и SPA'
        },
        {
          image: 'assets/images/service/himchistka.jpg',
          name: 'Химчистка'
        },
        {
          image: 'assets/images/service/prachechnaya.jpg',
          name: 'Прачечная'
        },
        {
          image: 'assets/images/service/konferenc_zal.jpg',
          name: 'Конференц-зал'
        },
        {
          image: 'assets/images/service/coworking.jpg',
          name: 'Коворкинг'
        },
        {
          image: 'assets/images/service/consierge.jpg',
          name: 'Консьерж-служба'
        },
        {
          image: 'assets/images/service/hranenie_bagaja.jpg',
          name: 'Хранение багажа'
        },
        {
          image: 'assets/images/service/cleaning.jpg',
          name: 'Служба клининга'
        },
        {
          image: 'assets/images/service/room_service.jpg',
          name: 'Room Service'
        },
      ]
    );
  }

  getApartmentEquipment(): Observable<ApartmentEquipmentElement[]> {
    return of(
      [
        {
          image: 'assets/images/pages/rent/repairs/repairs-1.jpg',
          name: 'Спальное место'
        },
        {
          image: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          name: 'Зоны отдыха и работы'
        },
        {
          image: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          name: 'Кухня'
        },
        {
          image: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          name: 'Зоны отдыха и работы'
        },
        {
          image: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          name: 'Кухня'
        },
        {
          image: 'assets/images/pages/rent/repairs/repairs-1.jpg',
          name: 'Спальное место'
        }
      ]
    );
  }

  getBusinessSpaces(): Observable<BusinessSpace[]> {
    return of(
      [
        {
          id: 1,
          area: 24,
          name: 'Пространство свободного назначения',
          description: 'Подходит для выставок, размещения продуктовых автоматов',
          cost: 29000,
          images: [
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
          ]
        },
        {
          id: 2,
          area: 24,
          name: 'Конференц–зал',
          description: 'Подходит для выставок, размещения продуктовых автоматов',
          cost: 29000,
          images: [
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
          ]
        }
      ]
    );
  }

  getLongTermRentApartments(): Observable<LongTermRentApartment[]> {
    return of([
      {
        id: 1,
        name: 'Двухместный номер с 1 кроватью',
        description: 'Описание',
        images: [
          'assets/images/pages/apartments/apartment-slider-image-1.jpg'
        ],
        area: 24,
        guestsCount: 2,
        costConditions: [
          {
            minMonths: 1,
            maxMonths: 2,
            cost: 29000
          },
          {
            minMonths: 3,
            maxMonths: null,
            cost: 25000
          }
          // minMonths: 1,
        ]
      },
      {
        id: 2,
        name: 'Двухместный номер с 2 кроватями',
        description: 'Описание',
        images: [
          'assets/images/pages/apartments/apartment-slider-image-1.jpg'
        ],
        area: 30,
        guestsCount: 2,
        costConditions: [
          {
            minMonths: 1,
            maxMonths: 3,
            cost: 31500
          },
          {
            minMonths: 4,
            maxMonths: null,
            cost: 26000
          }
          // minMonths: 1,
        ]
      }
    ])
  };
}
