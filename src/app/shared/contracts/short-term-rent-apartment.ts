import {Apartment} from './apartment';
import {ApartmentFeature} from './apartment-feature';
import {ApartmentAdvantage} from './apartment-advantage';

export interface ShortTermRentApartment extends Apartment
{
  shortDescription: string;
  imageXl: string;
  imageLg: string;
  imageMd: string;
  imageSm: string;
  detailImagesXl: string[];
  detailImagesLg: string[];
  detailImagesMd: string[];
  detailImagesSm: string[];
  features?: ApartmentFeature[];
  advantages?: ApartmentAdvantage[];
}
