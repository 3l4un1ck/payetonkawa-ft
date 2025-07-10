import { Order, OrderItem } from '@/domain/entities/Order';
import { LocalOrderRepository } from '@/infrastructure/repositories/LocalOrderRepository';

export class CreateOrder {
  constructor(private orderRepository: LocalOrderRepository) {}

  async execute(customerEmail: string, items: OrderItem[]): Promise<Order> {
    if (!customerEmail) {
      throw new Error('Email du client requis');
    }

    if (!items || items.length === 0) {
      throw new Error('Le panier ne peut pas être vide');
    }

    // Calculer le total
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Créer la commande
    const order: Omit<Order, 'id' | 'createdAt'> = {
      customerEmail,
      items,
      total,
      status: 'En attente',
    };

    return await this.orderRepository.createOrder(customerEmail, order);
  }
} 