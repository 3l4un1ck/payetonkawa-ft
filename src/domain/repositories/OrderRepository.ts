import { Order } from "../entities/Order";

export interface OrderRepository {
  getOrdersByCustomer(token: string): Promise<Order[]>;
  createOrder(token: string, order: Omit<Order, 'id' | 'createdAt'>): Promise<Order>;
} 