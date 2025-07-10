import { LocalOrderRepository } from '@/infrastructure/repositories/LocalOrderRepository';
import { CreateOrder } from '@/application/usecases/CreateOrder';
import { OrderItem } from '@/domain/entities/Order';
import { CartItem } from '@/store/cartStore';
import { Customer } from '@/domain/entities/Customer';

export class OrderService {
  private orderRepository: LocalOrderRepository;
  private createOrderUseCase: CreateOrder;

  constructor() {
    this.orderRepository = new LocalOrderRepository();
    this.createOrderUseCase = new CreateOrder(this.orderRepository);
  }

  async createOrderFromCart(customer: Customer, cartItems: CartItem[]): Promise<any> {
    // Convertir les items du panier en OrderItems
    const orderItems: OrderItem[] = cartItems.map(item => ({
      productId: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price
    }));

    try {
      const order = await this.createOrderUseCase.execute(customer.email, orderItems);
      return order;
    } catch (error) {
      console.error('Erreur lors de la création de la commande:', error);
      throw error;
    }
  }

  async getCustomerOrders(token: string): Promise<any[]> {
    try {
      return await this.orderRepository.getOrdersByCustomer(token);
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
      throw error;
    }
  }

  async getAllOrders(): Promise<any[]> {
    try {
      return await this.orderRepository.getAllOrders();
    } catch (error) {
      console.error('Erreur lors de la récupération de toutes les commandes:', error);
      throw error;
    }
  }
} 