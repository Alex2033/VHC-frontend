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
            'assets/images/pages/business/business-1.jpg',
            'assets/images/pages/business/business-2.jpg',
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
          ]
        },
        {
          id: 2,
          area: 24,
          guestsCount: 2,
          name: 'Номер-студио c кроватью king size',
          description: 'Номер повышенной комфортности с большой двуспальной кроватью. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
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
          ]
        },
        {
          id: 3,
          area: 24,
          guestsCount: 2,
          name: 'Люкс с 2 спальнями',
          description: 'Апартаменты состоят из двух спален и гостиной. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
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
          ]
        },
        {
          id: 4,
          area: 24,
          guestsCount: 2,
          name: 'Люкс с 1 спальней',
          description: 'Двухкомнатные апартаменты со спальней и гостиной. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
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
            icon: '/assets/icons/ico-video.svg',
            name: 'видео/аудио',
            description: 'Спутниковое телевидение, телевизор, цифровое тв, телевизор с плоским экраном'
          },
          {
            icon: '/assets/icons/ico-img.svg',
            name: 'окружение',
            description: 'Вид на город,  двор, достопримечательности города'
          },
          {
            icon: '/assets/icons/ico-lamp.svg',
            name: 'электроника',
            description: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
          },
          {
            icon: '/assets/icons/ico-furniture.svg',
            name: 'Мебель',
            description: 'Багажная тумба, вешалки, гардеробная, журнальный столик, зеркало, обеденный стол,  стулья, туалетный столик, кровать, шкаф-купе'
          },
          {
            icon: '/assets/icons/ico-internet.svg',
            name: 'Интернет и телефония',
            description: 'Wi-Fi, интернет, телефон, внутренний телефон'
          },
          {
            icon: '/assets/icons/ico-bathroom.svg',
            name: 'Ванная комната',
            description: 'Банные полотенца, банные принадлежности, раковина, санузел, туалет, туалетные средства, унитаз'
          },
          {
            icon: '/assets/icons/ico-video.svg',
            name: 'видео/аудио',
            description: 'Спутниковое телевидение, телевизор, цифровое тв, телевизор с плоским экраном'
          },
          {
            icon: '/assets/icons/ico-img.svg',
            name: 'окружение',
            description: 'Вид на город,  двор, достопримечательности города'
          },
          {
            icon: '/assets/icons/ico-lamp.svg',
            name: 'электроника',
            description: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
          },
          {
            icon: '/assets/icons/ico-furniture.svg',
            name: 'Мебель',
            description: 'Багажная тумба, вешалки, гардеробная, журнальный столик, зеркало, обеденный стол,  стулья, туалетный столик, кровать, шкаф-купе'
          },
          {
            icon: '/assets/icons/ico-internet.svg',
            name: 'Интернет и телефония',
            description: 'Wi-Fi, интернет, телефон, внутренний телефон'
          },
          {
            icon: '/assets/icons/ico-lamp.svg',
            name: 'электроника',
            description: 'Микроволновая печь, настольные лампы, плита для приготовления пищи, светильник, система безопасности, сплит- система, утюг, фен, холодильник'
          },
          {
            icon: '/assets/icons/ico-bathroom.svg',
            name: 'Ванная комната',
            description: 'Банные полотенца, банные принадлежности, раковина, санузел, туалет, туалетные средства, унитаз'
          }
        ],
        advantages: [
          {
            name: 'Кондиционер',
            icon: '/assets/icons/ico-snow.svg'
          },
          {
            name: 'Вид на город',
            icon: '/assets/icons/ico-build.svg'
          },
          {
            name: 'Бесплатный Wi–Fi',
            icon: '/assets/icons/ico-wifi.svg'
          },
          {
            name: 'Вид на двор',
            icon: '/assets/icons/ico-img.svg'
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
