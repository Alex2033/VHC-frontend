export interface Apartment {
  id: number;
  name: string;
  description: string;
  imagesXl: string[];
  imagesLg: string[];
  imagesMd: string[];
  imagesSm: string[];
  area?: number;
  guestsCount?: number;
}
