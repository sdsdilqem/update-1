export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED';

export interface Order {
  id: string;
  productTitle: string;
  productImage: string;
  price: number;
  status: OrderStatus;
  timestamp: string;
}