import {Service} from './service';

export interface ServiceGroup {
  id: number;
  name: string;
  services: Service[];
}
