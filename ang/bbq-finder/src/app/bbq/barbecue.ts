import { User } from './user';

export class Barbecue {
  id: number;
  label: string;
  startAt: Date;
  price: number;
  endAt: Date;
  users: User[];
  owner: User;
  address: string;
}
