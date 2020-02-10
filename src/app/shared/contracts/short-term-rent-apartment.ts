import {Apartment} from './apartment';
import {ApartmentFeature} from './apartment-feature';
import {ApartmentAdvantage} from './apartment-advantage';

export interface ShortTermRentApartment extends Apartment
{
  features: ApartmentFeature[];
  advantages: ApartmentAdvantage[];
}
