import { MenuItem } from '../types';

export interface Order {
  id: string;
  items: MenuItem[];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}