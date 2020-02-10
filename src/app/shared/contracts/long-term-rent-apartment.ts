import {Apartment} from './apartment';
import {ApartmentCostCondition} from './apartment-cost-condition';

export interface LongTermRentApartment extends Apartment {
  costConditions: ApartmentCostCondition[];
}
