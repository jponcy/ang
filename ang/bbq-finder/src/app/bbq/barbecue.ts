import { User } from './user';

export class Barbecue {
  id: number;
  label: string;
  startAt: Date;
  endAt: Date;
  price: number;
  users: User[];
  owner: User;
  address: string;
}
