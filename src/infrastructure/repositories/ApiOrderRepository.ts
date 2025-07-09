import { OrderRepository } from '../../domain/repositories/OrderRepository';
import { Order } from '../../domain/entities/Order';
import { fetcher } from '../http/fetcher';

export class ApiOrderRepository implements OrderRepository {
  async getOrdersByCustomer(token: string): Promise<Order[]> {
    return fetcher<Order[]>('/orders', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createOrder(token: string, order: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
    return fetcher<Order>('/orders', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });
  }
} 