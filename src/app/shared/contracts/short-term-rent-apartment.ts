import {Apartment} from './apartment';
import {ApartmentFeature} from './apartment-feature';
import {ApartmentAdvantage} from './apartment-advantage';

export interface ShortTermRentApartment extends Apartment
{
  imageXl: string;
  imageLg: string;
  imageMd: string;
  imageSm: string;
  features?: ApartmentFeature[];
  advantages?: ApartmentAdvantage[];
}
