import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {DocumentGroup} from '../contracts/document-group';
import {ServiceGroup} from '../contracts/service-group';
import {Service} from '../contracts/service';
import {ApartmentEquipmentElement} from '../contracts/apartment-equipment-element';
import {BusinessSpace} from '../contracts/business-space';
import {LongTermRentApartment} from '../contracts/long-term-rent-apartment';
import {ShortTermRentApartment} from '../contracts/short-term-rent-apartment';
import {Event} from '../contracts/event';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

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
              url: 'http://vk.com.doc'
            },
            {
              id: 2,
              name: 'Проектная декларация',
              url: 'http://vk.com.pdf'
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
              url: 'http://vk.com.png'
            },
            {
              id: 4,
              name: 'Проектная декларация',
              url: 'http://vk.com.pdf'
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
              url: 'http://vk.com.zip'
            },
            {
              id: 6,
              name: 'Проектная декларация',
              url: 'http://vk.com.pdf'
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
              imageXl: 'assets/images/service/restoran.jpg',
              imageLg: 'assets/images/service/restoran.jpg',
              imageMd: 'assets/images/service/restoran.jpg',
              imageSm: 'assets/images/service/restoran.jpg',
              name: 'SPA Салон'
            },
            {
              imageXl: 'assets/images/service/kafe_i_bar.jpg',
              imageLg: 'assets/images/service/kafe_i_bar.jpg',
              imageMd: 'assets/images/service/kafe_i_bar.jpg',
              imageSm: 'assets/images/service/kafe_i_bar.jpg',
              name: 'Ресторан'
            },
            {
              imageXl: 'assets/images/service/fitness.jpg',
              imageLg: 'assets/images/service/fitness.jpg',
              imageMd: 'assets/images/service/fitness.jpg',
              imageSm: 'assets/images/service/fitness.jpg',
              name: 'Фитнес-клуб'
            }
          ]
        },
        {
          id: 2,
          name: 'Бытовые услуги',
          services: [
            {
              imageXl: 'assets/images/service/restoran.jpg',
              imageLg: 'assets/images/service/restoran.jpg',
              imageMd: 'assets/images/service/restoran.jpg',
              imageSm: 'assets/images/service/restoran.jpg',
              name: 'SPA Салон'
            },
            {
              imageXl: 'assets/images/service/fitness.jpg',
              imageLg: 'assets/images/service/fitness.jpg',
              imageMd: 'assets/images/service/fitness.jpg',
              imageSm: 'assets/images/service/fitness.jpg',
              name: 'Фитнес-клуб'
            }
          ]
        },
        {
          id: 3,
          name: 'Спорт',
          services: [
            {
              imageXl: 'assets/images/service/restoran.jpg',
              imageLg: 'assets/images/service/restoran.jpg',
              imageMd: 'assets/images/service/restoran.jpg',
              imageSm: 'assets/images/service/restoran.jpg',
              name: 'SPA Салон'
            },
            {
              imageXl: 'assets/images/service/kafe_i_bar.jpg',
              imageLg: 'assets/images/service/kafe_i_bar.jpg',
              imageMd: 'assets/images/service/kafe_i_bar.jpg',
              imageSm: 'assets/images/service/kafe_i_bar.jpg',
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
          imageXl: 'assets/images/service/restoran.jpg',
          imageLg: 'assets/images/service/restoran.jpg',
          imageMd: 'assets/images/service/restoran.jpg',
          imageSm: 'assets/images/service/restoran.jpg',
          name: 'Ресторан с банкетным залом'
        },
        {
          imageXl: 'assets/images/service/kafe_i_bar.jpg',
          imageLg: 'assets/images/service/kafe_i_bar.jpg',
          imageMd: 'assets/images/service/kafe_i_bar.jpg',
          imageSm: 'assets/images/service/kafe_i_bar.jpg',
          name: 'Кафе и бары'
        },
        {
          imageXl: 'assets/images/service/fitness.jpg',
          imageLg: 'assets/images/service/fitness.jpg',
          imageMd: 'assets/images/service/fitness.jpg',
          imageSm: 'assets/images/service/fitness.jpg',
          name: 'Фитнес-клуб'
        },
        {
          imageXl: 'assets/images/service/service-3.jpg',
          imageLg: 'assets/images/service/service-3.jpg',
          imageMd: 'assets/images/service/service-3.jpg',
          imageSm: 'assets/images/service/service-3.jpg',
          name: 'Бассейн и SPA'
        },
        {
          imageXl: 'assets/images/service/himchistka.jpg',
          imageLg: 'assets/images/service/himchistka.jpg',
          imageMd: 'assets/images/service/himchistka.jpg',
          imageSm: 'assets/images/service/himchistka.jpg',
          name: 'Химчистка'
        },
        {
          imageXl: 'assets/images/service/prachechnaya.jpg',
          imageLg: 'assets/images/service/prachechnaya.jpg',
          imageMd: 'assets/images/service/prachechnaya.jpg',
          imageSm: 'assets/images/service/prachechnaya.jpg',
          name: 'Прачечная'
        },
        {
          imageXl: 'assets/images/service/konferenc_zal.jpg',
          imageLg: 'assets/images/service/konferenc_zal.jpg',
          imageMd: 'assets/images/service/konferenc_zal.jpg',
          imageSm: 'assets/images/service/konferenc_zal.jpg',
          name: 'Конференц-зал'
        },
        {
          imageXl: 'assets/images/service/coworking.jpg',
          imageLg: 'assets/images/service/coworking.jpg',
          imageMd: 'assets/images/service/coworking.jpg',
          imageSm: 'assets/images/service/coworking.jpg',
          name: 'Коворкинг'
        },
        {
          imageXl: 'assets/images/service/consierge.jpg',
          imageLg: 'assets/images/service/consierge.jpg',
          imageMd: 'assets/images/service/consierge.jpg',
          imageSm: 'assets/images/service/consierge.jpg',
          name: 'Консьерж-служба'
        },
        {
          imageXl: 'assets/images/service/hranenie_bagaja.jpg',
          imageLg: 'assets/images/service/hranenie_bagaja.jpg',
          imageMd: 'assets/images/service/hranenie_bagaja.jpg',
          imageSm: 'assets/images/service/hranenie_bagaja.jpg',
          name: 'Хранение багажа'
        },
        {
          imageXl: 'assets/images/service/cleaning.jpg',
          imageLg: 'assets/images/service/cleaning.jpg',
          imageMd: 'assets/images/service/cleaning.jpg',
          imageSm: 'assets/images/service/cleaning.jpg',
          name: 'Служба клининга'
        },
        {
          imageXl: 'assets/images/service/room_service.jpg',
          imageLg: 'assets/images/service/room_service.jpg',
          imageMd: 'assets/images/service/room_service.jpg',
          imageSm: 'assets/images/service/room_service.jpg',
          name: 'Room Service'
        },
      ]
    );
  }

  getApartmentEquipment(): Observable<ApartmentEquipmentElement[]> {
    return of(
      [
        {
          imageXl: 'assets/images/pages/rent/repairs/repairs-1.jpg',
          imageLg: 'assets/images/pages/rent/repairs/repairs-1.jpg',
          imageMd: 'assets/images/pages/rent/repairs/repairs-1.jpg',
          imageSm: 'assets/images/pages/rent/repairs/repairs-1.jpg',
          name: 'Спальное место'
        },
        {
          imageXl: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          imageLg: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          imageMd: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          imageSm: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          name: 'Зоны отдыха и работы'
        },
        {
          imageXl: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          imageLg: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          imageMd: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          imageSm: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          name: 'Кухня'
        },
        {
          imageXl: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          imageLg: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          imageMd: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          imageSm: 'assets/images/pages/rent/repairs/repairs-2.jpg',
          name: 'Зоны отдыха и работы'
        },
        {
          imageXl: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          imageLg: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          imageMd: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          imageSm: 'assets/images/pages/rent/repairs/repairs-3.jpg',
          name: 'Кухня'
        },
        {
          imageXl: 'assets/images/pages/rent/repairs/repairs-1.jpg',
          imageLg: 'assets/images/pages/rent/repairs/repairs-1.jpg',
          imageMd: 'assets/images/pages/rent/repairs/repairs-1.jpg',
          imageSm: 'assets/images/pages/rent/repairs/repairs-1.jpg',
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
          imagesXl: [
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
            // 'assets/images/pages/business/business-1.jpg',
            // 'assets/images/pages/business/business-2.jpg',
          ],
          imagesLg: [
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
          ],
          imagesMd: [
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
          ],
          imagesSm: [
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
          imagesXl: [
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
          ],
          imagesLg: [
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
          ],
          imagesMd: [
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
          ],
          imagesSm: [
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
            'assets/images/pages/business/business-1.jpg',
          ],
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
        imagesXl: [
          'assets/images/pages/apartments/apartment-slider-image-1.jpg'
        ],
        imagesLg: [
          'assets/images/pages/apartments/apartment-slider-image-1.jpg'
        ],
        imagesMd: [
          'assets/images/pages/apartments/apartment-slider-image-1.jpg'
        ],
        imagesSm: [
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
        imagesXl: [
          'assets/images/pages/apartments/apartment-slider-image-1.jpg'
        ],
        imagesLg: [
          'assets/images/pages/apartments/apartment-slider-image-1.jpg'
        ],
        imagesMd: [
          'assets/images/pages/apartments/apartment-slider-image-1.jpg'
        ],
        imagesSm: [
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

  getShortTermRentApartments(): Observable<ShortTermRentApartment[]> {
    return of(
      [
        {
          id: 1,
          area: 24,
          guestsCount: 2,
          name: 'Двухместный номер с 1 кроватью',
          description: 'Комфортабельный номер с телевизором, посудомоечной и стиральной машиной, чайной станцией и кондиционером. Все удобства в номере, завтрак включен.',
          imageXl: 'assets/images/pages/apartment/room.jpg',
          imageLg: 'assets/images/pages/apartment/room.jpg',
          imageMd: 'assets/images/pages/apartment/room.jpg',
          imageSm: 'assets/images/pages/apartment/room.jpg',
          imagesXl: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesLg: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesMd: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesSm: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesXl: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesLg: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesMd: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesSm: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ]
        },
        {
          id: 2,
          area: 24,
          guestsCount: 2,
          name: 'Номер-студио c кроватью king size',
          description: 'Номер повышенной комфортности с большой двуспальной кроватью. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
          imageXl: 'assets/images/pages/apartment/room.jpg',
          imageLg: 'assets/images/pages/apartment/room.jpg',
          imageMd: 'assets/images/pages/apartment/room.jpg',
          imageSm: 'assets/images/pages/apartment/room.jpg',
          imagesXl: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesLg: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesMd: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesSm: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesXl: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesLg: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesMd: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesSm: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ]
        },
        {
          id: 3,
          area: 24,
          guestsCount: 2,
          name: 'Люкс с 2 спальнями',
          description: 'Апартаменты состоят из двух спален и гостиной. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
          imageXl: 'assets/images/pages/apartment/room.jpg',
          imageLg: 'assets/images/pages/apartment/room.jpg',
          imageMd: 'assets/images/pages/apartment/room.jpg',
          imageSm: 'assets/images/pages/apartment/room.jpg',
          imagesXl: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesLg: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesMd: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesSm: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesXl: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesLg: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesMd: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesSm: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ]
        },
        {
          id: 4,
          area: 24,
          guestsCount: 2,
          name: 'Люкс с 1 спальней',
          description: 'Двухкомнатные апартаменты со спальней и гостиной. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
          imageXl: 'assets/images/pages/apartment/room.jpg',
          imageLg: 'assets/images/pages/apartment/room.jpg',
          imageMd: 'assets/images/pages/apartment/room.jpg',
          imageSm: 'assets/images/pages/apartment/room.jpg',
          imagesXl: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesLg: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesMd: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          imagesSm: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesXl: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesLg: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesMd: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ],
          detailImagesSm: [
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
          ]
        }
      ]
    );
  }

  getShortTermRentApartment(apartmentId): Observable<ShortTermRentApartment> {
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
        detailImagesXl: [
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
        ],
        detailImagesLg: [
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
        ],
        detailImagesMd: [
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
        ],
        detailImagesSm: [
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
          'assets/images/pages/apartment/room.jpg',
        ],
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
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'видео/аудио',
            description: 'Спутниковое телевидение, телевизор, цифровое тв, телевизор с плоским экраном'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'окружение',
            description: 'Вид на город,  двор, достопримечательности города'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'электроника',
            description: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'Мебель',
            description: 'Багажная тумба, вешалки, гардеробная, журнальный столик, зеркало, обеденный стол,  стулья, туалетный столик, кровать, шкаф-купе'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'Интернет и телефония',
            description: 'Wi-Fi, интернет, телефон, внутренний телефон'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'Ванная комната',
            description: 'Банные полотенца, банные принадлежности, раковина, санузел, туалет, туалетные средства, унитаз'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'видео/аудио',
            description: 'Спутниковое телевидение, телевизор, цифровое тв, телевизор с плоским экраном'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'окружение',
            description: 'Вид на город,  двор, достопримечательности города'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'электроника',
            description: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'Мебель',
            description: 'Багажная тумба, вешалки, гардеробная, журнальный столик, зеркало, обеденный стол,  стулья, туалетный столик, кровать, шкаф-купе'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'Интернет и телефония',
            description: 'Wi-Fi, интернет, телефон, внутренний телефон'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
            name: 'электроника',
            description: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
          },
          {
            iconData: '<svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">\n' +
              '↵<path fill-rule="evenodd" clip-rule="evenodd" d="M8.93662 0.000452357C8.66819 0.00869814 8.41335 0.126727 8.22604 0.329552C6.59048 2.05725 5.09721 3.75134 3.52656 5.44194L1.68014 3.88156C1.39166 3.63826 1.00195 3.57566 0.657817 3.71737C0.313684 3.85907 0.067421 4.18354 0.011804 4.56854C-0.043813 4.95353 0.0996661 5.34055 0.388188 5.5838L2.9721 7.76267C3.38475 8.10914 3.97874 8.07245 4.35018 7.67755C6.20888 5.71417 7.87406 3.78576 9.69026 1.86723C9.99381 1.55328 10.084 1.0754 9.91743 0.662928C9.75091 0.250456 9.36172 -0.0124209 8.93662 0.000452357Z"/>\n' +
              '↵</svg>',
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
    return of(
      [
        {
          id: 1,
          imageSm: 'assets/images/events/event-1.jpg',
          imageMd: 'assets/images/events/event-1.jpg',
          imageLg: 'assets/images/events/event-1.jpg',
          imageXl: 'assets/images/events/event-1.jpg',
          startedAt: 1581342908,
          cost: 'от 500 руб',
          link: 'http://vk.com',
          name: 'Стендап Comedy. Открытый микрофон',
          address: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
        },
        {
          id: 2,
          imageSm: 'assets/images/events/event-2.jpg',
          imageMd: 'assets/images/events/event-2.jpg',
          imageLg: 'assets/images/events/event-2.jpg',
          imageXl: 'assets/images/events/event-2.jpg',
          startedAt: 1581342908 + (60 * 60 * 24 * 5),
          cost: '800 руб',
          link: 'http://vk.com',
          name: 'TED RUSSIA: Моделируя эпоху',
          address: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
        },
        {
          id: 3,
          imageSm: 'assets/images/events/event-3.jpg',
          imageMd: 'assets/images/events/event-3.jpg',
          imageLg: 'assets/images/events/event-3.jpg',
          imageXl: 'assets/images/events/event-3.jpg',
          startedAt: 1581342908  + (60 * 60 * 24 * 15),
          cost: '500 руб',
          link: 'http://vk.com',
          name: 'Айвазовский. Ожившие полотна',
          address: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
        },
        {
          id: 4,
          imageSm: 'assets/images/events/event-2.jpg',
          imageMd: 'assets/images/events/event-2.jpg',
          imageLg: 'assets/images/events/event-2.jpg',
          imageXl: 'assets/images/events/event-2.jpg',
          startedAt: 1581342908 + (60 * 60 * 24 * 30),
          cost: '800 руб',
          link: 'http://vk.com',
          name: 'TED RUSSIA: Моделируя эпоху',
          address: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
        },
        {
          id: 5,
          imageSm: 'assets/images/events/event-3.jpg',
          imageMd: 'assets/images/events/event-3.jpg',
          imageLg: 'assets/images/events/event-3.jpg',
          imageXl: 'assets/images/events/event-3.jpg',
          startedAt: 1581342908 + (60 * 60 * 24 * 90),
          cost: '500 руб',
          link: 'http://vk.com',
          name: 'Айвазовский. Ожившие полотна',
          address: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
        },
      ]
    );
  }

  sendBusinessSpaceRequest(data) {
    return of();
  }

  sendApartmentViewRequest(data) {
    return of();
  }
}
