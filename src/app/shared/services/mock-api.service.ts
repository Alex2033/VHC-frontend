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

  getShortTermRentApartments(): Observable<ShortTermRentApartment[]> {
    return of(
      [
        {
          id: 1,
          area: 24,
          guestsCount: 2,
          name: 'Двухместный номер с 1 кроватью',
          description: 'Комфортабельный номер с телевизором, посудомоечной и стиральной машиной, чайной станцией и кондиционером. Все удобства в номере, завтрак включен.',
          images: [
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
            'assets/images/pages/apartments/apartment-slider-image-1.jpg',
            'assets/images/pages/apartments/apartment-slider-image-2.jpg',
          ]
        },
        {
          id: 2,
          area: 24,
          guestsCount: 2,
          name: 'Номер-студио c кроватью king size',
          description: 'Номер повышенной комфортности с большой двуспальной кроватью. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
          images: [
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
          images: [
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
          images: [
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
        images: [
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
}