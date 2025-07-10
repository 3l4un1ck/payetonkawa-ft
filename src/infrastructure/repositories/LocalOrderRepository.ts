import { OrderRepository } from '@/domain/repositories/OrderRepository';
import { Order } from '@/domain/entities/Order';
import { mockOrders } from '@/shared/mocks/orders';

export class LocalOrderRepository implements OrderRepository {
  private readonly STORAGE_KEY = 'payetonkawa_orders';

  constructor() {
    // Initialiser le localStorage avec les données mock si c'est vide
    this.initializeStorage();
  }

  private initializeStorage(): void {
    if (typeof window === 'undefined') return;
    
    const existingOrders = localStorage.getItem(this.STORAGE_KEY);
    if (!existingOrders) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(mockOrders));
    }
  }

  async getOrdersByCustomer(token: string): Promise<Order[]> {
    if (typeof window === 'undefined') return [];

    try {
      const orders = localStorage.getItem(this.STORAGE_KEY);
      if (!orders) return [];

      const allOrders: Order[] = JSON.parse(orders);
      // On filtre par email (le token est l'email dans la démo)
      return allOrders.filter(order => order.customerEmail === token);
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
      return [];
    }
  }

  async createOrder(customerEmail: string, order: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
    if (typeof window === 'undefined') {
      throw new Error('localStorage non disponible');
    }

    try {
      const orders = localStorage.getItem(this.STORAGE_KEY);
      const allOrders: Order[] = orders ? JSON.parse(orders) : [];
      
      const newOrder: Order = {
        ...order,
        id: Date.now().toString(), // Générer un ID unique
        createdAt: new Date().toISOString()
      };
      
      
      allOrders.push(newOrder);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allOrders));
      
      return newOrder;
    } catch (error) {
      console.error('Erreur lors de la création de la commande:', error);
      throw new Error('Impossible de créer la commande');
    }
  }

  async getAllOrders(): Promise<Order[]> {
    if (typeof window === 'undefined') return [];
    
    try {
      const orders = localStorage.getItem(this.STORAGE_KEY);
      if (!orders) return [];
      
      return JSON.parse(orders);
    } catch (error) {
      console.error('Erreur lors de la récupération de toutes les commandes:', error);
      return [];
    }
  }

  async updateOrderStatus(orderId: string, status: string): Promise<Order> {
    if (typeof window === 'undefined') {
      throw new Error('localStorage non disponible');
    }

    try {
      const orders = localStorage.getItem(this.STORAGE_KEY);
      if (!orders) throw new Error('Aucune commande trouvée');
      
      const allOrders: Order[] = JSON.parse(orders);
      const orderIndex = allOrders.findIndex(order => order.id === orderId);
      
      if (orderIndex === -1) throw new Error('Commande non trouvée');
      
      allOrders[orderIndex].status = status;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allOrders));
      
      return allOrders[orderIndex];
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut:', error);
      throw new Error('Impossible de mettre à jour le statut');
    }
  }
} 