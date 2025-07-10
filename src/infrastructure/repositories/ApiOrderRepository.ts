import { OrderRepository } from '../../domain/repositories/OrderRepository';
import { Order } from '../../domain/entities/Order';
import { fetcher } from '../http/fetcher';

const BASE_URL = 'http://localhost:3000';

export class ApiOrderRepository implements OrderRepository {
  async getOrdersByCustomer(token: string): Promise<Order[]> {
    return fetcher<Order[]>(BASE_URL,'/orders', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createOrder(token: string, order: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
    return fetcher<Order>(BASE_URL,'/orders', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });
  }
} 