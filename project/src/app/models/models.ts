export interface User {
  id: number;
  firstName: string;
  lastName: string;
  mail: string;
  favoriteOfficesId: number[];
  ownsOfficesId: number[];
  stars: number;
  comments: string[];
}

export interface Office {
  id: number;
  title: string;
  description: string;
  price: number;
  ownerId: number;
  city: string;
  status: AdStatus;
}

export interface Deal {
  id: number;
  ownerId: number;
  customerId: number;
  status: StatusDeal;
}

export enum StatusDeal {
  Approved = 'Угоду укладено',
  PENDING = 'Угода на розгляненні',
  REJECTED = 'Угода відхелена',
}

export enum AdStatus {
  PUBLISHED = 'Опубліковано',
  ARCHIVED = 'Заархівовано',
  DELETED = 'Видалено',
}
