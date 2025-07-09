import { Order } from "../../domain/entities/Order";
import { OrderRepository } from "../../domain/repositories/OrderRepository";

export class GetCustomerOrders {
  constructor(private orderRepository: OrderRepository) {}

  async execute(token: string): Promise<Order[]> {
    return this.orderRepository.getOrdersByCustomer(token);
  }
} 